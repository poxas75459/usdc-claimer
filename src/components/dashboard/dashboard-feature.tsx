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
    "3n1uSEPe7UhujVbaabjQwX3YFTQerzj3CrrAkKjLQzsrSterDWPJFJDXY2ja6rXMA4Ga1CK4mThq1yesirdxrVED"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HFcJgEjvkrpVW7F3wcN37AF4VFAzSCizC35XzpMd8JJUBo47CsYcFDx3hTn5cJsrsGfMmg6t76RQmF7nD9SQTpb",
  "key1": "iBQdU61ZVDy7uxxQXRH8pXLZtBjQqKiBz3VztLNYqPMHKGvgZ5UKQtep7dFqwoCDwTDkTQyhkZTnCUbhH4FNXez",
  "key2": "XobystS3hqAcQEvR5oHNbQvKctzzR9uc8Ma7Ee8YedYuni6931EaygNtcRSjkYVh5ahXZqLk6fsckpFsFmosoTg",
  "key3": "3934SUzUsn4vwFEkY9cFLvccDjPQYDeJ692Dwk7X4hiQKivP7g1QqYXMmftEDRwTUWetmqappv5L5KnoWu2TbBdm",
  "key4": "2zNZ3Rf6VMeg1yBmdpi7kTrF6eipzskzNdHY4YbcfwmExntZYg8QCUQ7eqaN87xbg2wSHJkeksfcbgSjpmeLFvZ4",
  "key5": "614QLU2SyF5g54yHEpAAdewkZ87QeY6pDNLhTiVxfkfbV5KN8KvVAf32sbWLcTcpuw1NzhB5Yv5tkjZD4hxbYSUD",
  "key6": "3V6KJDceGdvG96R44F6CePj4dLjRxp1YfRUHPT9t15Vd6sF3PPRKp6RDtmprFLdcHEPWYz7YqkAMPuBJ7qDWRqPP",
  "key7": "5ipjvHYxTkSRMGsL85s71Q1RL8d2vjC871JsJPJGPCTFtzUV3okKQWfjF9BEeKGNkuevg7SAuLCjtNT6yoaBEgK1",
  "key8": "i7dzycCGhijNFHcfwvnX4ooWRiftN4ENHWSYR2iPZvGRQnphpTbfKKAYqfFGXMe75GHVVhpA5YLXz54foyN9Hbp",
  "key9": "3wY4DRBuzy1agL6gYFHM3ZLMvhxyJ3jHFMCnaRwbYLDxCCtCt39g7akqiHUyajeYjTyPyAhLH2KYJ5FPc6PdCevQ",
  "key10": "5SNigaSzcqRYih8DH9Ladr56NkimEvADQtivc7Ao6Lemfw7stx5Je39RqiNCx8KXCqX5sXimStmKLiZomLxEZ295",
  "key11": "xthGZn7j8Mtw7YshvQsHF3TWR13VLoqc2w1TL6DH19QX49GXDYh6xwRNp6iz8acgPAAZH7kyEkZQdwgDb2bsF2T",
  "key12": "3VnGYKD8fjNNycux58WkittfpgWxmrUXJZXmSfy34rofFDZzTkNWvT2CwSNT47FrrQP8uPsgVNjkuKEyWx7V4x5e",
  "key13": "2h9gQ2YM8F1C8FkLugLRMUrYhzgp5MC1DeQ2BdtQcqEfZkqAN5Ki6uwPL4onvTCbqPDQah7s2vAbAEwBrC25kwbc",
  "key14": "4XxbqNULgv8cVmL8xHzS4SPKWi3juqZEuh38qttAuU4TgSByZ4TRrGPsJ9rbppviaF4FURG3mPvkTJCT3GXfbK7t",
  "key15": "Cv69vESN4BDHYV3GBcKYoqQWYMkcoLSbDGWVKr75AMJsm3oG2P5ysnBCATBythqbCnhESgr6CJh3unBteHDUhFJ",
  "key16": "2hBsgCtsDe7Tr3m19QapximeneMr9WuxHE1KAJQtC5JLoamxcoP3VsEeThYUH3EQomm5prvNPnbRfMWAmafhiYqu",
  "key17": "357hAXByz6pjFAYSJj9d5KkahSbeH5ammDZqgvSH3txkwfVtMJStS71LnXbnM7wfJjhYfNMJe92596RZZzWQ9vCn",
  "key18": "24gSHteb8d2VVeev5xnVbb5YNfHEZKXKtXb63Roji2QZWHach1se9fT53XTMkHnMJBzMBb2Gcq92ED5eYKvrNn7w",
  "key19": "49CmkntXLjscegycGNCNvjiowaNTupsv1E29PKHqJtoAFeuqehiyNtUE2ctazfxteNLUZ2bkABGtEyqDEpZacF41",
  "key20": "iHD2tSUofEzPoa8HtUrpEurk8R5XpQAVWVkwngRK4etJ1ao9GckxgeY7mjdvzfXDWLPCw6gnoMP6xNZPStmmycX",
  "key21": "4jUKvJbu5qDPv12j1gZvzKnks1epomvQzxWf9baZhiHDVRcvyn85AZKTX49eEoCtjGUcy13PiQyUJdzLZX7DzGfa",
  "key22": "4HhKhMUSncb6Em9oxFP8LVf4fWXQE5JeMZDYKQxb4N9B9XL558StAKtD4N2gi9dyuHUeV7cRy1TWECCkiHRgwCcV",
  "key23": "2MXaKjrvQggm1JjE9n2Qea6ntspyBTYQs7J5ttkxee427QanDa3yHuSNpWZvvosayQi6FiBhyhV9tKmCW18SvCGq",
  "key24": "3cbsFgTrBLo5eqWj9z5quevUysiozehNDmUiVhDFNENv62zutyFUB6Krg9DipE8emCTX4j6MjqwC1NwKiYeTneP9",
  "key25": "4w4oMuHcG4irgaf4oddHnXZa6jP3kwXjApL7DrMRNC9yZm6oAZfoJa3saMohEDQFVeSPZYkS13RVqJkmHpDukAYC",
  "key26": "3wtj2BFSMhigrxL13M4aQ27cCn9rVskZu9sss4Pb1gFF43yDqeziWWRvtkzpLTAxdApZbaCa6Xr6Qsue99TEHuYi"
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
