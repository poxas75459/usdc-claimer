/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "Q8oUy2SKs3HpKV7DKh895fazExcKm3dX5PDMe2SfzSqdxhXHk7ooVBTgaVYqCNpbmugQBfqmfgneEwpJFKewzcd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RwnXzUkxwkQKi4sDHiT7riuZWv4y58tbfzZFoshvjf7fPCGTWgjfCCzVKzhGyyXBWjxn41nzPSNs6puDbQRn2ck",
  "key1": "PPDssT2g1NdTxL9e74VsyENpgRiwyAB6fSfps8qrTEPqwFPJ3QoWsyqnux7FzxSvMaeGLo4CuPsuPGtWYNY5jsK",
  "key2": "2qiVmyYBDRQZVQvLMWf49hY3RHm9ifLp8LSTPc9V4nUGx7Q4Y3yL6riGGGpgCNhRGSWcMuRDTrsjFG8DHXaZ3qmh",
  "key3": "4BNij3nmnx3CfaomvxSzWj1ENAAi3ZhuCynknefXx6mf7GZZpvh56ZwtpMGUyiAuSFXh3L2wxNgjAXJwrr17Mioi",
  "key4": "8fdpFa1Seip5Sa5zJjnUVnA2QRNHfjufPTdkRPEHV3ri4hZwPrBPQbML2QfFc225GazLQBptYhwf3Fde7AgkwCa",
  "key5": "t7DpXNxNuB7BCkAdzSK49rQzBRiar66ZqGZ8pSCD2LYxDf14TUgrBSCSUmNEewDYbxJ7Z7jJvWbBvYxbeP785P5",
  "key6": "35DcR2CnR6TRDrKUXVNidWk8hCzdNN8qZufHh4KaaqHuqMWvkQsWhA7osRK9hy9EStMikdengLWJD2spSQwqcVGE",
  "key7": "3DwQqR7JKQmhyxd5TiKbiupFSY48XYx1wLEt3A9dv1xsMySahCH7458787JrojRp8uuxssWKzHCdU27DZHDcpGLe",
  "key8": "5AwPhyjp6MNFYYZj3G8m5tk6jKvghTmKoGdndcJWu4zCjCNKTwTkiJ2G1kAMj3sFMSx5LYqeKUobhABVHxer69MY",
  "key9": "3bPzqCPyjCw1fu9qgtQ5jevL3oTQFEhNCooW17mPwBi3gUmroz2n8bjTFk7gs8pr6j8PbmC3uPQLPt7h9nEHkmSM",
  "key10": "35foeU8W8aUnSPH4A7cDyi5he4K9S4qL97W4Ny8TjjmNiHe69L1w98NqwELh8aZkBZksHYXdofmyUG1xw8j6m5Vx",
  "key11": "4y4jVNVnQ3dKACMxEjuVNM2ua3Xc8wAFuW337QjhMDkWHkZGGythEJjfNKucVGUsuDMkXprZLF65WawtUUaHJArT",
  "key12": "5NbmTvm7CtyaeUzFdAPomKCCae6tUx9Kmq5zYf126NozJWkpoHJENHdFnDC7WP4bAbgRGfEtMZapKkuytxE8rryX",
  "key13": "6BJZvEVFNJ4js7UAn9AsCP7QvCFNK6egMxcUWrHq8Ru6P78ADFrqhCNpx5pzciYo6awiMeb9DrErt7ph382vmAB",
  "key14": "53Jpkx69yZijfdnvwsHXAFegRjtFKHeQZ3SXQkebEgGY8jkhwqgsq9twB54y9WYAVXKizKfBjLr94Nr5AzauSREZ",
  "key15": "4TBAD68qaCw1PdQLMmQm9d2X8uGjvsWuAoHk4iSoJRHbim3NxYXAnsc27X5tX1f1cctfUaCmkPFFmrx7fEPQiYtL",
  "key16": "5MYoNZFcJpgKRjGa5gCSDkM9atahPCcurR2K9wou9aN184APPszqH55Dz4bMfMPAv8CqdJnVo1SmxQ6j2QihxzLQ",
  "key17": "3Q6aqJPjyXRf93JMJLuSxD42F7GDwNT8NxbbWD1P54AdyWQBCb8KhrmhW9nydNZpH7YueLvpyMKHP7wHicJBH9aR",
  "key18": "2Ay9Bqg1rMNC1Xa7fpqXV1hmA15JHss1ESqdzQ2oVoafrbUk7QgWFAZcSzebBAXzEdY7sQEzdtaYUeMmhS98PZft",
  "key19": "5w24MKU67PpZNsiz49UmjYUUokAVX457tm71gs5yPPMXq1hUDuhdDaFVdAE9iBn5a12MyuJnEozuCGE6RrHzrUGQ",
  "key20": "5M1mxe3zNVJ7pZK24fScyeJAeqHDubvHYEPxMupbMj1V9uA5eeHMnMbWhekAwvsqQTh4kd9DdLSowsMYnz3ohdd5",
  "key21": "QFJqX3HANrjmRcuTHnYfZh1HCUWxeFWsU4QYSuYknM99KnK4zjZfRu3uB2tCn6H6ciDa995cQpMtpe5WTivs8iT",
  "key22": "4J5ZD6XupQqHmHmq2qwcWEqsZhpLN64Xja7VR2WmWSzhwHRrnc6JdG1X9Q3tTajpBUonMVn49dYoAhy6L464Gnr",
  "key23": "3CMMZg9nHNpLuvxESZXqQBqYEj8JpfmG5D78BwKPi8oL3o9MJneG3XxRrcDDqJhHscobdpiKD9ge3HkizUcYyjNp",
  "key24": "gv99hjQfmBnNtpyDKcTBNM9iFmfmuxNA8KXxjgBuQWLeC6DRbEchWi5k9PcDgqiqyTnrnVLyXJPUW1YjT5T8GCd",
  "key25": "5hcafM1d6FJKfkL7V4676fktcUxBPtRounmUzuFkiSPxN2WVmznDyyfXoW6wsJSsuEvPxiGuRFxVU53Ue7jaomud",
  "key26": "5tEHREAH8jtcDaGCXVeBFq4h8iMKM41yFH7AkjtVX3MK1kHDrv6cni2JaMEQoyVdTWzvPSQKfb5XAuBRoTvERauu"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
