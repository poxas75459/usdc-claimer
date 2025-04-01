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
    "3yzGXDQwjorkRA59whvXe26DD2RtPhniYKfKbyzAXgu5LP4mcDcdXbWxUsu1TTodJrREKL7yb41SRNxiWXBGByvX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EHXpk1Xp7S7rZKVvPnjW2KyPjVcaZA12XwzW9mz55zFKBBeWWFQX1A6bytAzmsxFkjY4b97uvLywC5WHtfM5Saz",
  "key1": "b78d4XLKtbSM7WfzTpN3m8sLajp2CmUouzqdXKkycnf8TNKVjiDewvCqvoibqPSwomi53QBXDhx6Aw5w3yfAvHp",
  "key2": "5R6LNwZ6DYbBBNJz8362mD9A4ym1YzUWuFp64oitX9RLKH3ZPzEVqW3z7iAP6cy5RD8ZXDHu8VhDxteWoAR7zYpc",
  "key3": "5xYPeCectHB3zEh9b5K7xMyBef2UE5eqaBiLxmxmzGNzqQaoZWmjrKV6HoqgjBSnkNWKsUF4hEwPhZ6qahboXSM8",
  "key4": "3KARYihxUGUG5PZLKWaXVMyscPnLdjaqX24p5gNHX47f46BuX9QS2BQYEWHkPv67hqsd5QKtaffBcWUbnuCVZYgP",
  "key5": "2XdcP491Drv4vZij4rA2BdYJJ6g7fhjxcbW6TUXN1m11zkiKSuzF4B7zgXppRVGcFjJSMCRGc9htMYRyidqMah7u",
  "key6": "3waskfZuHywgymnswFCruiq33W1sJkGHL495677v4UwwUqtGJaDrSkUytPaeaaoA3B6Uie5AVRoacAgp3aMQ7x4S",
  "key7": "xbiRt7aXpZ7h4UznpAthoPD6cxeN5tiv9bwM8nzu5vqRw847DD7vBzFQUjBo7qF5PyjDyjpk4csMTo6xWxXebXt",
  "key8": "5VrLybcMwizFnkhgYp1M1ubmEWD3S89LyHVZhWhMBkbchZ4C8fgoQMYVrdaEDsaABcd8aHzRYAMa2dKDVCmVD5Qm",
  "key9": "5Zt8xEy4AEe7XMCs7RbQYcE4EiKoDLBkq5exmsdVaH95i5UPrNeoFZt9uvW1t8C3ddF4R4rAsFLvR4UYqkJHPQ3f",
  "key10": "44Q1KomGuR49DFcHkCQPEXdy2A59fYrESmC2DbJhyPnKgFEUE9LpTY5SfmQGpvJmyPEKVcVkwQc9yvs8WNtgvFnV",
  "key11": "4ZUqzjRLQox1fjKguPfSXPTipB2ha4CJUTmzSbQu7NfPL6NsfjFBn9wsXRTTeEAzwmfmUPYDg8TQhGMDkQa4etvX",
  "key12": "3awdNTogSghfBkTgq1DVyd8QKRSeeso3hASpdhV1csC7evcFiwkHVaokNuEohE28ax8gHdt8EGWYuyH1DU44S97Q",
  "key13": "5tF8fcRu6EccsK92xcgpw1WiBK3uXap1bZLjoZtCSocopqJ6P4HBeyqbiwSwJF3fbMwvbCcn7gh4c48bEVBD4Wmh",
  "key14": "JAWxtbkSrCz9pDnCMRnK8kAungGeB2S2J7QQtSdDKKz2vp8hPwzrm2Dx2c5aujUSgosAgNeiPegHVqgdhGQPCC7",
  "key15": "2QdgFt1C21TeWgASPji6hNP3TysUdU8AoMgDR7AmJsHrWapF2PhmhaSp3KHgAoLeDAYhDLe3uUufxrgH6GVJhLKd",
  "key16": "1gwvS66ma2KQiAPTAueDyCrNExc8nCRhqgdqDPGqakZKQKWsGYXunig1m7WgR9NHRn2auQQobp7EF4JEh782VHk",
  "key17": "31SddDgCrKpGBDqeGapGGDR5HjYjJdQSQtRVF1WziJU3na8Kzo4m18WwMvd2B9DhmfAMueFmC3pn7rA7iq42vY69",
  "key18": "3sWaHXUtmBtEFP1LmgjNhM5AfG8Ypr1g54b8ACGtH6Y51zLRL3K3YHvkNDAoUoNKAZb8UQtXo48QSxiCC81zL6u4",
  "key19": "5oTzqqCm9VSzvLEfYEamfYKGvnEp1GjfjQ2LzozRrj34k9cUDpoCNEXzXz9g3VXeMcT3N2MzzckV6WkE5viWR4E5",
  "key20": "37D4WJnorRakbBd5EVpqPSLpzwBJE4DaNQZ3vBF7AQy1NYoMCWePrys23R4SJ1sk8DMrD5ERqAQFJk8J1CYKL7jU",
  "key21": "4uxB3k4xEPBWjyK5MrYnp2oAah1eRPzEv6WbpY5SQ45e2rHsfihXZV2PFwfEFrhtJCRNuf1jxRMGxUTStZwDLyT5",
  "key22": "5VACWLZBdcPWUBTgXtCZdujaHbSTv8SpDsEV8LVnwCvykomdEsbhuRarEAe3G7eShpoBCsz1AiRn8eqkcaBRuy7E",
  "key23": "5sYUYCqe3V5uYBs3zCg1DKt7Ddu2NfAe4749iTKn2SMf9d4BXCWwF6qAo52FS11DL1gCq5r1gZwnsRGVzjq3fQH9",
  "key24": "3fWArDWEA21hw43s6L8XSvr7G88ChSwAXNvZtPVCkibVpZSk9Fef8GZZ8GDvK7K2TeuRDWC98VdatXR1Vw21mNsF",
  "key25": "3UJ11tLSJeuRgRZQrau7dNF3KbDJN8sb4wYNm5urAUEUBsDFq7vf4Gy4P1HaCCmJ4uCTGg1NWyHtq7t2wPxSi8DL",
  "key26": "3KfaUHdQCC6vcK8T3REHkDVnfdvg1qHpSTnMnuWkZ933crmT5mHyLyBti6XAZo11umGDpMFo3W3QuepZHDBzEue6"
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
