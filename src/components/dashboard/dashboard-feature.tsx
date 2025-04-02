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
    "4PAda9woCsp8YzL5CR1dbgWVA5xbEjKKcA2hA8adJPCLeacdDmCEsPHZ4iUrRSzQiwFYvYqZ7VoxUA7VmEfQuZnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4otP1Q9GV9rEr6myRLMGBiieW4aNhBRjvTYEMPG35sCeq5EKHNLZHH4xHYRiJ9u5kb5rWMnqccKiRs6H3Gw3Qnvi",
  "key1": "5qwiFmGYM9v6ph1agfwJbhhwDDzfUfP5h3efY3Uo1Q3bkHaoR5ynv3didf81e8YKwt3HPpFirK37oEf2W7t2Ff6j",
  "key2": "2ua3kYLbpExcfboqjecuatbkKdjkGVDbE8qTCGMrhfXt4oTqR9k8Ya3AgNwvuHsAf7Hb48nw4WVvzqmQDm38SWBS",
  "key3": "5yC8wFR39hJSLcjPRQtPSH5sZwSn9Syz9MRwp1QywCsVPEosHmAHcQwfYowC2tDeABjE6nbUy9VxpwrLkV6MptCf",
  "key4": "4YQyh4XLVkcckLWn4vnziG1KGKPSwKqcPQPyT1PxsLsZMN3xPF7zNmnsmWm7oSGjkAqAsoVaTjXeVG2eyK2hs3QT",
  "key5": "5vP1BSnWXQb6is1YWBEy4an5iHPwrNeWPiq84ybqVRo8LjzgPCG5XbutjBvxFzAEBWHqY9qfnB898BePzy1UEkmx",
  "key6": "2bACcH1q2tEvTdyDUA8Lya9SbZqssNtu5nQ35twm3oZYVtjGfx7MNfYUtdcTTPU3K9CG9hJa5Z38WEDu9424D4F2",
  "key7": "4k7MdvAh9CVwtpFzCcmKrf2DH5tT3W81hubL7TiKeeuAHotQt5LN3J5p3bAmGAUeMr1L7uXL9M4UjBm5TASbQjUn",
  "key8": "5mpZipTzAToymMC46sHpuqE6VgHw7KmQUpmhGqrCwQYW2vq2JkpKGYGyGL3NnUL6rzsnFn8kcnbjUNC9sxmBBztB",
  "key9": "3eL3FzkTp8v364svNHo5yjbt8KDqLjrZwbXVaG5saDkasDGcV7ugcmD8WDSWWtVXJ89xrPqeuYFAAMkVVgAAkXPX",
  "key10": "3SxvAd3xvcavXGmeupV4DDGgN1NBDR7uu1Kgc2sSFFkjtiUMnvwVtHxYhPiwNHhv8CDMYMobCj15yVffNHLGLdAD",
  "key11": "LumPCU9fg36G8pwEuqzQyYqMPg4wzCQaHtmLAgKVcday2RhaioMmn7AZ3mC7wGrhYmx7A7TvZjSzapKusjk7P3z",
  "key12": "WU8T1BqaRs34SvSngag6zcUPQejnZzHAbjuY1KnCzRrHfS9sLU7rAcXsaNXTm6hnSfPSJX2imyWXvjq2L4iycG3",
  "key13": "4gctVBD4ZPkqXCbZBYThdr24Ee6j8zkApFkpLEZ4LZGnshtasWn7LsLpsF8utdqVgwxXWUwY16haUc7gfMRHTjes",
  "key14": "4hS8yS6X5qxeN7bMuVkRsVsFZx2fFKrnJ6oRQUMFXmGv1ZQRMVRVM3j8A3NPYhK7F3ZBZLCZoQKWDPzCfBGNJ9pN",
  "key15": "67oH9fgLCQKECUW5XrbrpHum4PiJicAjGfF6cMwyk86HWHzKjMVKwaNbVpV21T6wzBVmEZ95Sp9jBPyzY7tBSbHg",
  "key16": "dnykSvGiXyqmqrhscmdEu69wvAguSQNNPvi62xJXR3P5HidrMsKZhPDzQWvqc9GzKHCX3g68VXAd1ADZbiTwnmW",
  "key17": "4SZ4ey2AjEqqQixk5DE97tzXpZfkkwKZYPgoq7qqmqwRpr5sdGqHPbqTdzMAz3bNemqArH2ZQWQw2bj8y9HL99ZD",
  "key18": "51UHoUYAsBBYZJegECyzFX4wyHzkxBCbEohxp48EwmD8SmuQ41apaqbpSa5RhqXwQNBV8ZTtERQL5yj6PNLHY2bb",
  "key19": "4fCtTSc4JiWVpfccZgd91tETbcFNePHF83eghTJhsP1YPw1YBpvQHvfTRj9KbGzRY1tF1ZNU7fvPgBeRkUrF8oYZ",
  "key20": "2KhSNj24AFtCf12KZ63twXvbLyQy4tuLDexGFUJHdTUsM5Hn7M4Dfxqtk9pXo2tc6cAGcghZrJKhvmCQpB2w47Yc",
  "key21": "65x49PUivYiZZZz1nPfnb2f6fJkA14VDLodiBzc5FWF3hNqfqdAYDJaj9KcRuT3goCaofQkobXpFQhUvaYm2CwyL",
  "key22": "pfmtAno5xwX5Mmk7NK43R9RkkBSiwk6B89d5U1iQ3EvJPyAqhPooWkpvULn2ursGBSdroN8Ab5nt4zQigLYAboF",
  "key23": "4mr3j93x9FyVRsTbWJKEhaaUWES5rxmxGinoWViwpTeGMyssNxqPYR9414NQA3wXkC7w36Kg2H37BVsHZVPBLDJh",
  "key24": "5suYuiCCqPMqSenR35aTu6fHJaAz6W9ciRSFohsnggPcLcz1dnBsSeDAccfspWGgkXifANcS96BbQqsx5UZDSwRL",
  "key25": "NMfn4uUmNUnXD83Eb2451pZHdHYoq1GsiJmEmHDsRUXTdtqjg7djTE5pr49eL4N6sXPBtMrgmp26fSfGqPkmVwu"
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
