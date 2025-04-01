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
    "3kKCLkuyn3t848khcXNQnyAEqToFnTmHQp3VXPoSMZoH1NJRsXaUHLWCh1JPAezNU6rJ1u1zqM2c1k3FgBprzDo6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "464w74EpdytexhSVWq25wXHwcyqzmQZ9kYrubwb4XYpvnUS4j8YSpupEYa56KnWSU14fYHYM2qtemG9FjzRD2YjX",
  "key1": "3QyjiB5uGTfnaHuntL16NDzpdg5Veps3UyJmEiSGGg8diCZhwLwHwNrpSSGXUKBjrr1298qCrAYphrVfYmfUwD4a",
  "key2": "5J95U9aUssTXXkhCkhGdpzpfFDE3CFN9Hkf8g5zf5JMi3iULB3MXUN4Zt8zEzmkqWBSaootUSxQHLfULEPPHfSpE",
  "key3": "4QWfDUW6KnsaGoS5oEVyzY9h9t43Z29rNGepnDgtwZgHXNvyA9HPsGPPqrm7ASdcFebt6y8ksVwAVE4uqurxYzRW",
  "key4": "4XdkqiQ7MYqHevSVrdVZCQ6y6ujfXC6teNS7pKdgnWdBWHoLQJzMp8RvWyyjkznsSqsJQohGQQ9KwbS2HVFfxFSb",
  "key5": "264FDMuSbcTr8V8TvVQQfAX661eV4ZVLWrLZAUa3jP8Lu49nLSTP3YD1XRqTJhbUFQM1ogzBH8vcsvezEghfrz16",
  "key6": "5a2VPSn9DHm9aaMpMZWAw4o2WRh4Eco4hpXaCEATi9kPkoiD1UPVGyMKCUDd4atmUZUQ8zgcdW15K51VHwxN3dba",
  "key7": "2xcBufCqvUgipfo1hWaAteDF9QyApYRRyweBzcfzUkYBH3kswZHyqLDXsxP9j52KZhhV382br5ZXoUzNE8ep8uGJ",
  "key8": "PpJ4gFLmKidE7wCKnvYEEcFycQe3hjT21RZQpB8bCyChCYf7NCJcXnRJ1v9VfeuF9HHRKuYC6zbxdnt3i7caPZ4",
  "key9": "4pf9w6yyf8fiE75QxV2KfTsv3HWt845cDfbdmfFSqVkZ1MbWuszWq26qHreNmp3huvkYp2mRo9n2VhkfnznMen4N",
  "key10": "536b6xoyyNCzZRwKhYkojJB6unq1vYTygyJ3Weyeho12rnEkLVRTUcyvxrhyryXXztbYcnKAJYPr62GeDnCpBqsh",
  "key11": "3pZwxzKkqnEFnqx3UNkb3ZexhnbeGGbp7Tz2GrtXQuj7yspBivYTbrAaoHbibYR9qYWCGJuzxe6H77F7hxYYjLwJ",
  "key12": "4FtHuLwecDhpJDf6huZYVbLn1P895gqqf2bf5CJhJQWtUATpnMZHCAEndDdx4wPyhSqXzwuh5UZ6FwiqUxm3spVi",
  "key13": "5MMNpWiXa3RDkw5PbFVLh6EDGagzjtt5ZJ9an31EZPMMWvAELN7Bx6aYGBvD3n88KfVgFficTim41Bkedkg93ND9",
  "key14": "5yda8sLMmZQfm7dhws2wRWai7oSpEgDnLN4hVHa2sQMCGoCs4yPgP8fvFZPDBz4UgHt59TXSbWSPqxTW6ZksjBw2",
  "key15": "32EKCTnYLJuAvUSz5TTiMthB47Apd8EKsmyBruLsNNZxz3zFvFGg44JD6Viu7K11dPwLTrHMbiim1UGA7YBVwCFs",
  "key16": "3u4yx11sD4J5Ura3kimczrDRZM4qbc5FcFXUntHLFjyUJVd9UZErGJ1FAsVGb6CZimqyLPKxDvU7h96pCFvyFZ1P",
  "key17": "3KhKizRu8jQ35QM57HgrzPW6MsF12sZABhQwtEHxNR4hYwQedetD9BKcxfgsvJjdfekK3iUKvckyFdFGMz7SkRpn",
  "key18": "5LJzHK6EFgPWfHMqmPVcYgfYSA8KC8CUrZ6wEmCGUEvCWqiPT8uZBmMUAu84HVBgpvLBCwikYCrmezUA4n3ZspUv",
  "key19": "5ZWyRkfcY1M2nRHM7LsFfspGF5EsJLxxBnyCTcKzCQgw9Vbo7Sohour4CdXee9AjsardBVEFUTKdpLLDPgDYTTso",
  "key20": "3jaymW2YmFVW7iCaQw1s5YuEiw6k1uZChpxMZU8es8nou1uCVLuNGx21p8ZAqDtDA8aBZo8eRkGZDaUbkCRbCtgh",
  "key21": "3WNrU31LQWSbWXLXYevHJNrcHPo6HM91mCfAhzES9MPJViwTfR3XSgp7mauN3HDU6ruJv1jjWBSfZhHwLQAJabNY",
  "key22": "4RPiivz5pKAnpFNMqvEY1CC5eTkLoocCguMHBzXeejF44dz2YrWr6udMzRQDgAVGhJLsGVKqPcNbHYpRfrbYYLaA",
  "key23": "cn8DCQp2t18bU3vZppDA6i6pjaXs4WMeT73xKUxsQREDs3xZc9Tkq1X5RBgrnrkxiRfjX5T8DGedizfNs9bFyfG",
  "key24": "4eXZTCfnxRkPDvgYBu8atg8zbjMWg1Snanr8rL3h2pWMuuiRPz2tMRwHfu6N1AeQy9Ba98mTReGd7c89uJU92od8",
  "key25": "272akt6ogui4RA7xmx68vi9UwYkExjK45JBbMssXHJiKL5W1RNNL28f5TDoy4aEizpH7fFdYxcrPA3tx2Ut9L9P6",
  "key26": "3CzGG1CutRbpcGThQ2hNx56pWV1J61dDaRdv8bdZET9nbg3aexWuRS3TJBKuNPq1E3pfwX7xQEvvu2hE7nVWLiR5",
  "key27": "2ThJAKTTeGRLci8ZM6yYd6ao8u76JKL27E7Deawh6k6r2zh8s66wYYXDfwZzb6hNr4FEJa1zkHimKLpuCpGnnvWy",
  "key28": "4Yve4bxcXig6Ctcx9THqxw26cKfoQ1CyJHLEp7j3AestzGPF1nS3KZbTT9f2vtPMt3w1HHSHJhdgVt7Tb8cnryEu"
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
