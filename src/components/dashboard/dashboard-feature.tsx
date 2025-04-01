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
    "2hr8gN4sLE6iXR4Dt679Z3kKr6wE5nZxo1U6S6EhDXpzESyGDkZTPKCb7paBxGkRTgHphpbbZyFf1rYAF3UWXKgq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u5CgTbd9PVoVM9KCcmsvciGS7roBVsJHc78dfvd5St6uLxFgMqitbmY6GVuc7XSFrkgph4LgxiyJA4Kxy4ZQdx",
  "key1": "5HKiXNh7zGC9PnaZuWoFwAnXq7sGFopLF8t7vUyGzR1QEKeysE4B911xS9uR3EQpbKw1sV7Gm6TzdBdAAwVU8tL4",
  "key2": "4QXwm3XZSg4qnwZ379V25PEHBdGgcRHUBxcG8SMVz1Wua2MqvkUvW8bHRVnFuV5wQDc91PooyuPXTuxSZYJkAD48",
  "key3": "3w2A5UHVBt7dES3BpdxGx6VxbQU9LEAKXx7tDVppwSdXG2bwUPwbbUppkP9rCWy8VqZHqX1VitcumhkWxAXkgswY",
  "key4": "ARUWMSaZX2hafzQkgVTM2UVFxMcVu69JHKq68bxfXNZV89w2uRtKatEj6qRYHEiJPCSotA3HGWK3wCrUeQWFq16",
  "key5": "4eZRKRLMdp1azoACuzKEnNEaQkx31LXzAuV8WnPCn26KkEUSNLXSAoQtZopnY3Jw3JoVyfEPtzUNicSEYatsza1c",
  "key6": "5tfSakqYvHjK2CzzvQKfJqPQJYbzLkkB9T3mcPRDxgzmdRzWAUhKPDwkYCZnDpXVuhtEaTFtBamDdo6pvWJbsCdY",
  "key7": "2Hkit43Hthhcv18mzvMLsj3BxWPBVhZDRTsyH8FpSir3APbvCJKsmLAUqCpNCGRbjM2rkf1u88FFpy8vokvUQ6AW",
  "key8": "5usekmgWYMcbXmW5v1GJnRmvB4wHJ63gbFcY6FXjHVnAs1xpurXgcsMFswYg1zdS3vYQZqqLYyCR95jQ8LsLctD1",
  "key9": "5NECfX4RYBiJyuH5JH4JTA4xPGCZ3FXk7Aa3CwQ16nTEdwZDoAiwLkqdFtbZaizmfU7MBKUyb9V595wLqCyPBtZB",
  "key10": "4TyDYA6fYSzw4BForwX2gkh8xAMwbzXSHMKCLa8tM3rnZh8pNvJER1P49vSbj95Jp1RfDSAgrJMK7h4urv4RzY7Q",
  "key11": "KRzmr7eoZ8RJeFsCEknScmFdCJza7TbMGkydougdkrVvQbij8nMU8bUQTDEHpbKWaA65AaVMPpBZNBqDQDC9uZV",
  "key12": "4R1n9u62DDAkX18NexwD2vgUqtbCJfheb8CJ9Fk4q6NNvVR2cqrwuxWpLm2naLBHJVpi1csuqDfNufyxSvHhpciG",
  "key13": "2rdAAKhWcz4j5FUWdQ4c9HAqedFVhfd5KPLKQKERuRCWgKchSruWS13NYRFGnHRR9wsqGCJLAq8NxgyPcaRkjGk",
  "key14": "B1nnfLnNsymSMXQubzaBnMdBg2hwdsLm9pujJP1kzPHji7PEUVaNMwpMwJusfLcSTXRus1bqXdqcxnszdLTkQ3z",
  "key15": "552QNFsYXXSgQnSZEz2WuUQckPFrR8wE2Z3QEY1oK5nRf2DiaZ74h836uzccMabhp3HJ8BBxdcnu4HazefbDHZtt",
  "key16": "3yXH3kwoaD197suZNuiXMdCSwizTbPTbW5EwdcQXqdfpXTnXHtAfig3B34MM5ift2LGN9hbGKjbDHTCTpXH5VKc",
  "key17": "3e3otFgbVRT6uDdVGbNWYEZhefcYXQZib2Y5yaVvJdhR2mPXcDFWmNexnFaL88sNGmSsGNJympDSeMaQNGnSux4g",
  "key18": "2vmCsxa3Qxz6ErcVUujqc9MMNTmSwLs3MrerTsjTBLmvazFM8vbMkrL1Mz5uHDvvnQisSFbeiDacmP4DLDfB2Nv",
  "key19": "5t6JDyoFXq4cPj3QaD5RpPtcbhxKLfJHj8xApbvhEX7ropV28UwJewu8q8eqm1NoK5QsMHFYqfxn2HZJSQjRYpkm",
  "key20": "4Q6EkQ63nQaChCkiFo73hUuMNgERWJFHu1DcVKrDyqtt28fLEUASWzer5YNC3natzgqPGc1fF6Nz1FGUBBD1skG2",
  "key21": "2AaNLyK5tZKa86B5XnwQV4Jear7qBM3k2KptyZ3DygWkEcigby4tAcEbK2o956gYTPpZFgm64uSDzbqWY61BVm9J",
  "key22": "5fySx5HaXMe2tysS8QCLTVGzGVZAD9DvYFTh1H4B9vcfFxhNoVHL5L5itXK6hnZUW74M8HD6tsJYzjhAXxrnXCQc",
  "key23": "5jxJ9BxZjJsv58UWZgD666t1BNzqUgXko1QL8CCkz3VJHZnLzo8RnMpqiye3nM4dBs4zX7ALFaUkeytb1nuh5ih2",
  "key24": "3TgkyoavcGMm94ZNSB7n8nRE4TtXer2a3F5MFQm5gWhEtTxvj5HzwLGKCuuGca4FvGEuwJBxQ4YqRZADzuzXBF6Z",
  "key25": "3eyngcN6kstE53sZwztY23XQET4mAkKufuMbmsZFDEecGUy6eLeC4vijw3jqecbRwUCVoiUmyCKYq9UJXWEtQLkb",
  "key26": "43UPZVAhKTVv7F5P6iyYegAWwCUXiRwWYcFKZKK1dyzGh8VGzEbbLWBMSiVKR3w11bTbhpNGL5MR2DPwmSYbDvu6",
  "key27": "yLzVX582uMfqSPe9ZuGNuqyEht8HH1Lr3LimQ118i5TUYSB68LR7ERGEC1PcvpNzMWcG2JRmwKy1Jiztg5E8ueJ",
  "key28": "Xtb5wvTRakFied7sDvUXjNjYGEE3QMYPKyZqc5xg5b1eLSAYAWF4b3qvi5qV1P3qYVDPRG2gfjRvhMdN2YU2GyY",
  "key29": "fi4D1Ci1c6DPxjwnwdsXGXCDYZjSxgXhNs1T7Lp8XFVa2nb1tFWKc3H41WfWkhWBJKBz9S256fHVJgbYfXH4hwb",
  "key30": "R8qJgakSTvT4FcX12nEgTDqVp6gDrjyCZMC3joeKbt4pojSzTraF1rNaFt8kv1RqbZZEx8iHDNXxdZUMsK3jXha",
  "key31": "5Z4MnZ5FXJUSxRG9NCQKika2GxzsRosFnyXTLrHvrGozkCsx4o55bgb5KKygeWEdGMy2Au129GjnyAAoFX5XmNjz",
  "key32": "3VUC1hdkYyTRnPMxfssoz9s34nJTwoTnYgBmwsjgesrhV1ZnXTaC22R9dqEmrGESjYLEgzVzkc2fNW3QxEZCfA4t",
  "key33": "2wFu1Lak3zQBJpmUUbzWD9aVfcjELwqbST9UojkEU7oq54tP9L68LsCy9c1bGFD11Uw8C44m57KD8YNWACe2x7CH",
  "key34": "2hAYjhgSm1qe1fFhwHSiPm3H4JfXtAJUrBtJm3d17jsBEMvWeCdw7xxko7RwCnaFyQQTqYvCkftzvNCTrMasn5ug",
  "key35": "2cRBPr3TbsEsGgH9KrCN1Qs8RFhRKskzQH5e7uCQ18tRug4xJduUXrJxrP3QcHqfZKsNxPcZD1ifsAsR3p1Gg2DX",
  "key36": "5Tktn4YBnEDoE4qbSgg6oXkznS3oqtt3YLqBtjTeDHHWuxmfitTVhEYrjXwgfdAbqcpywecGTHXRBvpeFAAVxeY5",
  "key37": "3x3WKPxpfWiE59ztrcYsJCix4yWuKHFKDG8MdwmkLCs2mpYXKh67xziTDt5gUzzjvizdczBHvuyA8grR5Lh2kpTK",
  "key38": "3dfCYaTkzBK4duFa4cPc4vHtzUmNeeqGDWEBZ1GJoNiVaYmrwUc2DUb8AgBi3sbmCD5NexBajjG6SKth8ck4a6YJ",
  "key39": "vyzcbHgcLgMVSxC7hQaC4nSDJHnBFsy5rRAFKHLvhB6PinGeGRGud5p1xpx3JMdqNJLyWXKiCE6KbZPaAFZpAnX"
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
