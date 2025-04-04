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
    "5ziDAAZqLySbenxAoXmrCNvCb1ogbtRfuZ2y66bSRzJnZdeBGS9vpsq9iXSV5fXA83VciFM5WWfM5gVPLk4EEBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dR8iwhE8NN9EgVwoZPUmYWvh24KbLdi1pT6cYpV4e7ViJhbLiZzyznYpiqZsbXdawmvb3WVoehRFb4CuChDDqSi",
  "key1": "4DA4Zt4L9vSFKbFWZLu31izibA16isNnoDeggdAy58MFrEUinbUm3j9NHwVR3NkghubqF5yFQTfccNnxJ7Fj2cFe",
  "key2": "35Er3qfsqkNiDyhYnFtSfbvYfnGPcVbnALVXybP5maRudoApwXBSJ3WFrsrRBuJdLzYgTkM4v6SEeyRGA5fwEgeF",
  "key3": "45DPeefS7w77LerodaHQf923K8cWtBK2XngQhuBQdt8Zf6PNYnVNNTnWRT5WTtXvbdMniHpBZKeX2ZwKJjqR9N6Q",
  "key4": "45JT2DEDiRuCrYsZHGxtEpS6Tg8jFLSiPMU1dVdvNEpBNoZ3rSmeL35kia2oKPtnKrwu1YFxwnk35s3c4me1bUuV",
  "key5": "5TWsjTHpn7MHkP51DfaWimD1SfmmyXSANnp39n1PQW8Y1aHbGjpzR2WyD49dMKFkobfcaZFdj18w4RbjNXmh8kqP",
  "key6": "3diFkeHy2Pf64cQorT5ryAMN1acYqx8FF7vj13wMMuptHKkXznbb1nSHSKEHJDMnhkoWyDf6bUqSuKFiXQVd6gaZ",
  "key7": "3jDc34kFPjh8BN1gf7Vv2Q4i3tjwdizixHV7LbytpSsSwNbUjE65C3ykofvS2HVaBXaxLzLVVpwHAdF5AX5vu5mp",
  "key8": "5kXdrPrLKBV4fkFEFAC7QGgqqqGbNpHNbhUwBtTyscSo1pAGuChyZGxoEX9n1oEDJL1Mu6gLnZCGhzHAkCMVb9UF",
  "key9": "3C39TGzNKfmbKKP6MKsPqsUw1se533ziABfK9a1CZ7PXUwgtDiqHxAJndqaQi7tnxXBc1qY1THwPCyuQY5xDPS9k",
  "key10": "NrcfUfwr2TnRXNKs6S33fEV6KPCgXS3jueSFkHL48eJ2t3YonGMkrxsyzjfuPKdhprTRF8rH1jXvQMUzjqGsLJY",
  "key11": "49CszvJG6fMqfXovmGQAJL1LWsB7BB3Toqduqs4G2r4S2HwHGMcycXe7znqwzuzCdfTXPfv9ugsQ34UXwGqjEDwo",
  "key12": "2BfL65jM84LrBdddZYWhnfW2st7o9vuYuULn1qje6JcaDLKWmbE6STGcevvRh8eXFkUkNu4cPkHvFVzNMrJn9DBq",
  "key13": "3PpYXJ93PQRQP5Ufe1yU78jNEFjW9HFavrqdUUcZEcj85tGG5uBAXB4bm6zDVYXQ3qbv44pjJ8BnKq39tQTY7uh",
  "key14": "5VCLFW2B6sfGU6FRrtNn1GxC9JbxvTBYfA7Mtj5c2A6s7iqAXyYiS2EF9w4n8CzamWfcsaDnTRBDvJamPMob2jeS",
  "key15": "4QS6ZwrYce9BwPH4FUVF75CkvTj6QaPckHXycPEECBQjCr9EvwcC63ngLjmSeAs8qt2LdHBEqSwjMg6niSBZydeB",
  "key16": "4QypDsD1YAtHKChvoyNzkGAZgGKCHfe3t7HLZyxEPP9YmHeDH27avEJfv7qPN4C6qnEHLrj6EExWLVdZFtH4w3eN",
  "key17": "62enruziLTefNki92Npcy7dVptjEDAGAGXnGHBQ8xgPBRZnMs9XMuKitATEnmEF1Bkaau35KqvskUaYvA7yuj7Gk",
  "key18": "4QyQAPayZtYQW2gUyJQgSGKxMECRHCGAGPNgbEo74x17HTe1gQyc6v3k9D72WEHAhwFubFC5hrfE4w3cVtTq4FeP",
  "key19": "LXZnT6xUXjw8mhX92h3oX8VLB4R8pXYfkTBdsvDWnEZqrr3Zjt9jLESuCMqad6joipZkTkk9efqFQ2aWBgSmYBG",
  "key20": "5DH3WFfDBppuNafdoZzkSXpQQQ68aWcnnSYMCHgLeEqbPH4RZkobKqAH915sas9zkhvcxmqbcZG3X6wiTsqoPByu",
  "key21": "4joaLNT85mgNH99uGndyxy287tqT3J85F7Em6ToMSeqep2fwKPWsdN9pdUKvJLwZ34w3RsiKwnjJSCWtCaEwRx7p",
  "key22": "3FdAiiFKhe8JDEY5eyfwEDPXVCMMPLmpKYXeFT1nMoxfxd3AgA4ANVbqUKgJMKuTWY1mcjxGarrUdqTBozYh2wBY",
  "key23": "4vUYQ49v8L9v6TtfGxZifB6vvnboTLtNbZ3MkDN8xUcbhuiqPuBkyaDMi3b9BzL6qC4ZjHfBgqyZXQ2schm6Ricy",
  "key24": "5ozGCKW1US8mGnH37ivSFs5dTQRAHDNP1w2aUWu1AhDuJM3efFDQRpyDYRTn5GSBp81XgQdiPfsjDe3ku7jsrTHa",
  "key25": "2f8KPW4QkPfoZcT82g6RYpKQv1SjiRVckneapgrh3WKDUGFPosFjoeDaqoPwgMDB7mSgVT6vgWRKE424kzUfF6SP",
  "key26": "2AKMGthfjuComqzconaPyKNwvKGGnTgpovzyNz5QpUF1BNxboTKmJRAtLXzyN9EwnagYSqehvcrL2wfP5Z3YndRB",
  "key27": "34PeJrmwJ1aadP6mvGdADJ9sh1zZeqo8Sxj6qJ8aYBEb6mer1kVZfQxVhd9X92ByLYqpUJn2L8R5J6ozLsFbvks4",
  "key28": "2ekJ2mMa8JEjXjdNBj7a2rbuGef4MZipNnQm7UDfthQcYguCR8gupR3Z7riXxscgqLwAK3QVQyfPz8oXqAv4bCi8",
  "key29": "2iheos6KR9nzeMusBgZPW7327c4fadFzcsuDScg7MBgwdFwr2Uf3YR2zWm7v1VHRaCNu8v5j88uSMULShX89rxvi",
  "key30": "2cxNprE8qP6phyWFaKMUywFu9f4jJtLJhmYi62odAS95D14V7Zku9r3NssgVEyuzmHJEDaATrFqKy9Ys6b23egGi",
  "key31": "2GDyTDKb4egm7dmdMDV5q9kZazM6EUQYBSQ6AXnCS1J21ygbgbU7LeVgrxbpQdWH2n1AYcT1kr37KYj63qmijikh",
  "key32": "fktmXKx9B4yiQAZNCyZA7MFoHvyrrtkRd9vD42ovPqUhp2maoGaNmm7mBMYjBjj8pNWtDr6RM8s8GneqNfHGsYC",
  "key33": "25ddTA5oWi9pCFBFBrLPF3kMFcJBJfGNmLGJRdW1prutBrHQ8DCQ8JJJbYoY9CpvCqi4UoUUL1gq9shrGTHJEBBX",
  "key34": "5ZGutf1BpYdyDpB4rkoMfXGAaexVioNUw2hWbH8BrvaXGYoWj3Ckouf4sYWgk7N3vjGvrz6yLwZCpkUSyQVM65DW"
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
