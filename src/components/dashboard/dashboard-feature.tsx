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
    "34h7UdYzEDLqFMv8HeAuGy53q8UED2HWvn1pLfWHjqcMz4cYJKhYFjLjMuPN6ayyajoWM9qGA3bMLdfjzt4iWaio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "skNfwxqNXkCpT9LYCZMp31mob5LTLmw4btmCkttmHFBZsXQCXN43gmBHc5zP6ysnfC3JkhJkyuCivN8vziqCVXF",
  "key1": "5RTuMcq2UD696VJnQw9XKb2G8gaJZPsFVazCmgV8sH4YBcjzH59rRXTWrFyNKFovkZdLYfffVoWzKeiEU87z7GRF",
  "key2": "2USSUz8oCpBrJP4gAhYQ9PT1CJoAQRRJT6Ufov5f8ZMiyyTzyg1iiQa1cNS7JiEGxG4AY7fbMoYz384ebqnQeipR",
  "key3": "4n87Z1YS7S8nCH39DSmgSHvq7ELvrUvxDJ84p5CV8a4rRgTTnSvmevMBGpFii8pGBZfiy9kEF4JVR2TZdz2xJSgZ",
  "key4": "2AWDvL7ndkbnsAPGvLwPbtPH4S14GPj9MFaPvZXg1vsJRdaANwHD8C2hnhicD5ASrWBCQQgEtAqyytmbDhe5u4oW",
  "key5": "3qx1boXLUXv4auzNp4yosxmu16ZQAvhV7TwvnZjZNSxhxrQfTVTpbSwmLabEUKVjDF2A4wPq2rAUHBUj7tKonLuL",
  "key6": "2fAP292UAxAa9aN5vcxGP2ESJkxvpb7i9St34kXBi8BwqQEUfcxvtB7WaStz9DJvGk6yNyD5NQ27Ffa8f5v2QP6",
  "key7": "5AuaYibtwj4AMeQiB3QA6wYVcvWVNh5aTaWxiGMsXGtnSMcGTi8xXVLbnNi6gg182MbnxQ3iuNmAsUUbX58fSn7Y",
  "key8": "4hePFoLR7GCPPAFZixRvrx1BrCXoM6BRyssqFYwhGhKZhnSVAYQtvS86KN5A9TBqy2n7CPWkoRp9bYQ9VbUoWNHj",
  "key9": "bcaBGK9GmuT8rbyRNcPsk3Kp7EynhtHwf3osnKAjuqQCviUoERAEcjFbRhqKFMwHFByjKyxobzppYnmMrftXDaT",
  "key10": "5wMxHcFmEPuGz1TdwWk3D3NGKZ6tCUfkTL9nd3DAiexZWswgxdMZ6B9MRpP4KqfaoR9Py8EoLCPN4Bd1CNaVcLoo",
  "key11": "ynNhW7qJBQk6iWcpuPoE2npBgxKT4ZLaxGeWUTYmqTxVqA6KTbgjjLf9NTNroZbHbRPm5g9utWvoNVNkDruWZiF",
  "key12": "5KpuPoDisyyycURXazae9kRQCX4WQ67tTZVoQWVEceo1gSq6KX5ivRuCE71nPyx3mpuTE77gzKJj2e7PnX5mYr99",
  "key13": "Cgf94TMXHBWq4rFChVaAf2LBksw3VeVSBgGNJeSagPJ33RfwwkfcWeJgbsDas4TnBjdt3rEFAsvDEVPQbMFJttR",
  "key14": "5TMen96TJ4PcVdHG2F69qENXVFa4iv92KfCq1c7zcceo7tLyWcXRFo6XiGrkcqD87K2x7rRCmPyaC4rPJjSrcZon",
  "key15": "hXzEvXyuQdSe66FVfTnJzTw5yexWSf6AxwwTGx9EZoR9VtW2vaTVHw4P4QJidpghPqsPCABuWK4SpkRWtRtWuKd",
  "key16": "5pQdBk5NwJriuk5SWbx9AUdUUKrWbUNGTePKCaj7spLRkgKuWozCptJxr2JG4Ep3LSJJryWcBLi6MnNhiuuP7Ejg",
  "key17": "STRA2d9smurhrva2zUPKrtC2utir3CpwZmoGjm5uuGfTn446gWQo4mqyuuiT17X32P7mEosYoiSSLT4fE3ebTx1",
  "key18": "5C9tEkEt4Y3vUEyyLVbLz9unnTe6dk9TQSDvvVwydj7Cuf1udtgzyTq1rabDekAf1Wdceqzj9giVihjQBS8roDMo",
  "key19": "MJ6LvuBuXppbbFPbHjXrFqD8fcydP5cJnCF4vqxhViRWnYDSSWvSPoKHJpc82koFSFkJcBN9Tnu6iENGmEShiBX",
  "key20": "A7wmRcnx2UCuaiWRdW9PPjhmB28dqotk6NN3X2eF7ttyv45xt64SPrbfuZhnzuFErrSV64AGm3eYBW4fhwvseZK",
  "key21": "32CzJpSnemp1TAdRifrq2kwRZWKmFtEhs3exvkyMsv3HfkswNGeeScm6qtHy3qishWJaVirtP7gtF7qDn8nR11CL",
  "key22": "YskeszZ97Fn1FuNKYHrVeKB7CcdQ6TWqzZba24DqzSSaCWmMskb29XFXSMN4anX2TyT6e9qSWmhADPtdRBoWAHd",
  "key23": "3iyDHg6iGzxpmspwHQXRCRVpoqo76N5kQnVwtRAkg3afHiAu6LjqsdpHsZxsQSsauwGpaaHMbVL8K7yr3U15SHYS",
  "key24": "2447SMpnHfPWm9QjD7DTeZ5Hr1p61N4znZiQ5w2DQa8rKLKe1FLwRracvuPo5RRf7AuRPzNGVvQcZiVGciETph2H",
  "key25": "5jyoRYkhGX3shMCsQ6i1Mv4ya93wuVdWqvhzDCRHF99isCoDU4mLUfFSAG7RuWswJsBXF87vEcwvVTzSvC3Dj7r2",
  "key26": "3RMbxHdn3br2zx5Knu8TAHwdUBpjMRzpybbzb28doTUkXTwAtyPvroom5UFpTEmLzkGVbSAjER3qUGLuTYQJrLe5",
  "key27": "4g9gCJKQDqoz23C7qLpMqvHzasyXD1asnPVRkLMmDyihuPyyvdrXYN7B5wRXFnJ44f4JVmssBSuaqKdhufk6UKqT",
  "key28": "4sXUc5R21cqWVfjevD3dL7YCmhkSTntTQChS5ndEKDW2GhvtkS72deQcnocAi5EdqkEdH9JfHpXmmxAasqu6oW3e"
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
