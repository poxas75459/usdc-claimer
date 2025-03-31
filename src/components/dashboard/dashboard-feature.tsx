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
    "2JMxQrG6tMwNPca3CzwfNxf4ydAM978Cn6gYYkxgpde8tkaZtYWdvPUxPHFSHV5zX7FgshctNqiheUTm1TUHjhkD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27vjJ6DKH8zonH1c3RiDv8Y9VNvJ8NYwGvGQby96ySCy1XZ4Bn3Vciaozjq4LXHPXoiwqP9oZPHHVWJbiG9GLL6F",
  "key1": "4MoUaprS365rqqQCcFzHfUwShda1KMBXzNJb6KCgBNviJyoiSuWw7erJLP29Z496JVV4dE2hUjLJ3dBPXUJVqsvu",
  "key2": "2JuFqLCnaFB3HdmuJbs7HDwh1MtCJDEVRJ5u9uA1YzYTNxC5fDobZsDkGjMGe1EvQEEmZjpKktayYbQR68GJcCqC",
  "key3": "3t6VQQip2nFKCbZHKMitxwRvLk5JKyAGDV8pUKsheCVYFChfytSNtLxCgtmU4zjZUANqEkpg8jE2iUaUXDTHvniT",
  "key4": "4HWtcVJjYmfKVf1GgZiMpjVwYSv6qvrtramn4HGZTx897WfbE4EmNcH6ekLWVTpZH19BWbYGwjTvah1JRCcFJkkG",
  "key5": "64YwY3CxRBkUh4nEiGGN3LLZz2wqnTpmSxsKgFt9bPQiZt4ocKthcSoqMsDJP6FYLZBZ45jVSuEw1qYAp1iH5S55",
  "key6": "5u6tEWSzYHJfuM1qcGDTGc9dAe1F2kwigrqNbrCF7kgpQ7QBtjmM9AbPEE79ncMxJZRv8yqprT7FjAqXV8YZLV5t",
  "key7": "2EXqvFcNXeff8CKNgGkbsKhncSQHow4VkeEFkSFef6q2nxhgxVn132GetoStoPzLpfGgUVxHe1LGDffAXvDXbERi",
  "key8": "AFB8ZNnePbhGUzkf2fMDkEFmHrBXcDbmV8kJYSy19gN6Sf9jvwXq8Wcr4kUxPLuCwQ9zgTq4FFxkx9EwSb46QXt",
  "key9": "26CuYxWRE1CDA6rfZ1LzuiR7JNrXzUCkG17KxivKRDudZWqumoAmLJ6SuD1Q3WNFDe7QRCyL82372BpFNEwybjjW",
  "key10": "5tdb5i1hmBwEKquzAvtmniQEpwAV9xXAh8t6XXyNQTAEJkMFGze1EGctu5UoT8xuag8qtC23S6quvZ5wtPJkPHhW",
  "key11": "3Bqvw767zF6ThkxaniqzTQqbMHrkHZSKrHEP8Cfeayia8Ggroevy6R6JmfaHKjRfWn59YgSyp9XgJeJcjcq3wqA9",
  "key12": "3ZqLssUWACRZv7NhieiLhA6bVEUZpcf4XERuzfVDa2x1BQwzCofgcXFVeLPFVCPusUwPgpzvDUWiL33WN89htQNh",
  "key13": "mWUwx1BXEj7NdfNYuWC1yMZGtuBTngCciet13UPs4jNE8ujkYsycAKoipFybLoC57ej6aqk1NefWDuenr5hJrDz",
  "key14": "43XvsKZejiHmTTAHWSrRnakSNzwkXJioYajgDtxggzVndmojgp3vMVbJ1FfdS4buVTb43ZyofCx5MFUVJnKJVRaM",
  "key15": "3Cw632HNjQRPT3uHZyHT4npw1XNg1EWhLmAXNVn9z2n2h521swNPJe2Jyfq98aW1zj9FGgy8vV4f9xiU6Ahw9TNw",
  "key16": "iqPv1pCgmUtRiJy2N6hAK5aCRNjpMwJDas5pGqKEhC7uSnLzwrHKmL5JxngL5Aem5GkzAHMqPX5tvFYHSZxifP2",
  "key17": "58h3kBXPogbBPbhfjvbZrKv3SVy5AeT5HTtahF5ToPETQoP8jxAdzKpz67PGrc8BUxDHcSSDqkNcAPvhfAveiFZQ",
  "key18": "5mTLSrjmZkn81sr12MWCWUzzqbJnpQL69Gvq8vqEuaDjZ5RoZesEkjbR5fANzBFkLjrNbtDcPf4g7Y7kUSLoHJVQ",
  "key19": "41J88ZJNmiEWmG1PD3FwUdgppTZ1NoxopcLBUaRCfoqLAikUY3R6FcNzPs3FA6XA2eqr6NSBTAz5bQ5roP4drKo3",
  "key20": "KCwaJXHjoyUPuba5Uk3KATzYbkE1BzqqAFCBvdV1k2z5AYc335FroTCMX5gpkfjuKmYuKrnYZKUzt9wYL6UfqxJ",
  "key21": "4qXNRTaoPKgwhCaTi4GE185X8CCTi8RhhP9hxAzELZ4v7JXVPugofS2iCrmfziyUEKLFGxTaSPERUKvkdq28dw1H",
  "key22": "2GGTPTnDmQfEjVRuhBZNjHD8ettMfAdwuAtnwva2YNL7nrkjm7aQBZo137UvuhzhLXmmuJezido6XFrW7XnKJHAR",
  "key23": "5gNvX2byNsVUMxmo47jKYtNzvjwDhAESQd61BHNw7PcmdRXWdkqtDG5GGDkVjtU8TpHJaHCAXcLtN26NyFPttp82",
  "key24": "5RuDRKiGzgTXa72RpjNhwQHMEHpbr4RXuyzvgsdeQbanqcXCXpQRbKo3xcQbndVuJV6LDMJSvHuuy9uGykJfFWmk",
  "key25": "ZEQMWvyBBckW2vhNMAigme4bwJZnzTN2jtr35DRpRT5cXe69UTodNcbaGk6JCRMJyAeWx9wGuod12sBGYEPQ5ic",
  "key26": "28tSXMmQ5wL8aZELxiR4hQdx3UCYBw9rmuTaa7NwcxTMVChzwB3Fmxng3TmYu5z6adSdcfp3HXKYNSUciBnebqkT",
  "key27": "4bESxSPmid8qDbV8oBcP3G6zpdUT5Tt17EMovVarRZsBsxcZxE34gSKQBkTWihB76hN3JoCJizBmnCeWL3ugC4Jd",
  "key28": "3kxVbbbArk58ETr1WR949bvMWq42swj4pWgP4yfFW1e2GC3JrCvh5Cnmcs4zVTF2ATgxsmzV8DJMUXfM7vBLRcn6",
  "key29": "5y16g6rxNHkNtZkZ2fAprKRuce8ae7k7kwsfnvgHVbtsrc3fKtLGM71Pu9Gp3zuYD7xR7VvHPHAADkJZu2NdpHm3",
  "key30": "4suaXVaJN54U428ogbQ4JE5W5w7i26si6xULpBe68SBq9a5PmsSM2y4gTgV8VG4Kfqf8RZhWoiwyytmM5NC9TKmH",
  "key31": "2fSM87e5dmUL7uSrEoXhL3YK1USUsgerSpiEDVq7pnjmApSdtis2LXAaFheqFGb63rnqyFGczurCiofF1AfrHcdJ",
  "key32": "2hqh64LD6Z8TMDUrV13hvzy5K4ivM3gap3wtuxEoZG9GBa8f6dza2eHjrmYg4kB9R94hq29WrWm185GNU6xzPro9",
  "key33": "3WyrNNcjiwGgMZSfoZQCaWDkX9Jqk13dRgCnyZNuQBiw3ecDrkqP5EwzPzJBeUsSoGK4rkXzD2dTi7FaJbL6bHzH",
  "key34": "xAknK8LnHPyNLR4YLwBqWNbytJZ6BfPGm6D5DJyyBUQec24Zmo3QCdD8EfmjdswcAupvmotCsQ1KPnejxTLFrcE",
  "key35": "57NAqkvkDGCyZH7txZJnM4fURX3psXUA2fMDrjP5DeCKmnqt2RNwcmK6ePg31QWaUGcFLUJ2jRQHPzP6dJfhJ2fP",
  "key36": "4huw3bdcfHRVjQcwPt2YaWiPPyM9ejLdSEbhr8Ct2cvjifZmshyE5Lk3esRqUu5reT6bwZSHakqVqF6xWYqdXEFx",
  "key37": "2moU77BcrUtTX6mM7mtrNcFu8KLUHviw9Ja4BhzZDjRFNiDn4VUCuLS4Krp4pbBmhqTQ7HSFmqfQN7AtvgP5narS",
  "key38": "35ZMadzB4WioLF43Z8drmio2qEWUFdu2dKhewuXPY6oXzkKgBg24btYeDu6gyzaaCkW4gD792LqrJMdVewgEJ9ei",
  "key39": "5jcGyvaMyUcoHxGdXFU7FDB3bAgDLZHQqhUu2pa2XcyKWtu8YEY9dcpwSpBnbs6qVVfgYdjcsPZZLWdUw6MFmtpp",
  "key40": "p7YL7yRS2aDd2DodM8k1o23vQuUqvWyqUEnh7gFDNLcrYBoGUGkzDuUX4FrcuuYcaAa3nT1LNNqFs7qPKcXU74W",
  "key41": "rfggYNRj55vC71rxNbD974rr6FdhdakavrDLJNtA7JxsnKUWCCiNb1zEnXPPsZfQa5DwQMLUbwgTjzpeU68kXY4"
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
