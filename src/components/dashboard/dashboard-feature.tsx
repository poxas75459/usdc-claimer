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
    "5eQDtLcHBZjwUTJdVKQmfu3mqQjQsruwrx9UdhDmoDstY9rizYSyMMrgBmCYr6eesUDbgRgkFx1MmetV5duZufZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tfnJcg34N1DdWAiHz7x4Bh4kV4n4eAEfuck6qDFBnoGPs5wheMfkuLp6LhKdugfPb41CHs1yevRbJka8vTT4HXh",
  "key1": "52YvQJYABuTaeq32WiPK7zvxUy3Hk5ojcwXqEahkBJPFMGn6uK335oC8REb6TTtfUtkZ9tFqELt8etT4BetScSUx",
  "key2": "5qTsXWkorNKXRdbE7sGccHCdxWrRwRq2Po1HggSQVTmShHbKqKwzwC5MvhQe2CnqD4P2EbqB4ZXMWHuoWzhGimf8",
  "key3": "6Jjbqk3aYnBFVLTz9DTUHHDZgdLoHEmT6Kze7akotTUC7cdT5g1zC5qkXcPpK2NexMHyuiDoSwgTiQt8PVg5dbB",
  "key4": "5ukEavQh22JDpeUGJv3wesDiZvXhgR4Epa23wTFLWFdtxdMaGyzB1yyp2f2KJVBoF8m9EpRSSjDEc9NChuurcV5e",
  "key5": "4eHUfpraUAsH816xf5S4CzQA57Sc4EgwKxjbUE33V4CGuBd3S476EfP76XC2d4mw3nYwB53rv9FZdcW2WzH5tUwS",
  "key6": "3C6UrnVyJxAXd5xQ2RbcdrvHec3Y9x2GJYmYtEQRL3LzHxyAAgaiU49isFN4tdWi6FxDS7NKeaFzsk43jM9SPAhq",
  "key7": "567EMLrHZD8mrQa9w9MmmQYyk99o9T3e1hvPiKxJcTcoRwfm1xtqFeNzhvaVXu6kUmN6PuxoG2avvhfdAPEPHmb",
  "key8": "3ijuJx8aMo8FVuFGaoCaLpT79VRs176svsb7bdqownXMd2oDNpDonG7SH4gMghRXQEwtgxaLAfN82zZXGyAag74C",
  "key9": "26DY2Mqn5674bp1bjexd7MPpXUb98pJtBUQmYq1AstVKZ2EYSeanhZfQ5KpNQPE5i4yHRxjgyvQDJAC78qyHmBQG",
  "key10": "fYFsSarpEH56zbQyEnNMYGECiTrLXArRtcrJPawP5447gi56vdMzdgkxTUvQbrH4diX1o2sXopViWwnY7iax3VB",
  "key11": "3i3smHPUQ96hgkWakbiDWqzrNgpuTfxAXo9Zsf455qNLyo71zitoDiHeWpv6JoAoGfgXVEMqTmEVschYW7dz3DwZ",
  "key12": "LrMVN7rQYiw29KNAz5SqAmFbtk1Z1G1NoKT22KWbqAxN8HhhVTyVWNF2kLEzEMYXCos4P5Qgbtqhvcws4Lb83G1",
  "key13": "3QyYeUy4upM4uBvnTBzVmHfUuXxFW3Dut8Nwc5K6D2egt2Tp1WfQ7P3B2ezcHE9Atf6UenSRCVwANto9QHNh44kx",
  "key14": "te8UJAKrwq8Sp8ge819J693fCyWabwgmL91yUmMo64f9UvkqnNiENJU9sNbnoQJXoTDwKc4KeQAEtwmWxHEEYZs",
  "key15": "5RYKB2J7X72V3gdSM2e3kGrovkTGWDZqkvczegwFBjgCmr2gyFZChaQTXdxmmsunZYBCdCQXpsncouh9YMJ9rKp5",
  "key16": "5UHCaJ91q9aTg4VKyTX4N4PLunEzzxdag4r22DThcnBjJi8RUxKbnR7G5QstyVUGffe4AwHPGNXtrq8sW6GK55Wg",
  "key17": "5Ag5DbDZRhAYNL3Fv2XG8d79P2ZxT3bYGH5TwssSphBMyUkbWQ7HCmR6EX6r2AVcF67E4rJx2fH94XLGVszy6KtK",
  "key18": "3qpvvKtqWkSrwyobJokSQcZUCywvz67Qc6trmx4V5k4jiYWG6AgKvFBmAATCu4QoTZH1ubfBDNwqpo1LUaw6Jfcx",
  "key19": "2njwPJJGNtbwgjSo6j9rJ8dNV2chfRAtzEyVCgExdsaata4Jg8FPx4dFG1tRQxJLW5DE31qcrr5K6pN7dpWVmLGB",
  "key20": "4pUgPUiyHGfgE33dbjq2UT6Gn2YAKWLPkoYywskF1KFiYQyjJkSdVhnqc4MSfVpc6GJUPsgR4gJVf5KMHbqtyAiM",
  "key21": "5vwJkUUmxy5Lx6us76x1h2RhcFRRwtAzTd8QPcqbEotwNiBAZQJ3sTpN3UAsM1MziFz5HXTJGuJiW7HkQxpQK494",
  "key22": "2hCLgtTGrKnF2cvg2fpPdzjgyutb5ZeLLyisqhrFTdAoY7McNnWtQvsQEdRjrEVpKFCoD41yeDn3BWKdEBanf64o",
  "key23": "2NsD39nHhqqmPUiETh55MooVNtQFFjVg2DghKEUpihYkT9eLuUBCX7X5K6r2aM5cvzBk5y281XqTwnzTk2m2GV4y",
  "key24": "4us7R1cHd3ExhGZvqYw2Q8Kypef3cjTx6VrHbxwjNeCcqR9vNfdSzeqkFFZ4hrJZhVohboZx9cDeBdF8bhNRhC43"
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
