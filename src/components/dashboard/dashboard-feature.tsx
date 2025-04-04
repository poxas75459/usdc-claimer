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
    "2NQmuYxWQeatnFTCeXJYQBjfPv1YWdLDtnhTYkEhMV6mSFmyNkSnosGJZ5AfYmXs4Ztf3UtK82UC9YjKY2dVYYqK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xpcReB91E3Nc5QU7qCUfjG7YAuBewQttJ5rJr2fv163n4TAHVCESAY3mWbFzHfL4pT2tU2KDRLGMSH8snyCcKtV",
  "key1": "5ZBNV9EPCuKAWUi3T6AoSCSCzLuHQU4EW5Nsx7Cjc55YAdetPB5os46ANQFNbKCqrL4fzwGmVynfrCpgHb4WCUtH",
  "key2": "4GLM6YikKbVC895vz1caR1Q74CyyUdq8SDjLhowpKwELXw9z9AjV5i6VcQqtseXTM5gV5ZfDqHakpxCA8pA8RCcN",
  "key3": "xmAQBv5npe8N6QZfxdxQw81Miw9nNKmAsNtk6H6DzrPR6Emj2Au8exwZQBNZiAvN1h2R9FuLiD2gKcLUPn1cgXz",
  "key4": "39yR119X6eiRvWRjvREFPaBn3ogGkcuLyVH2pbMppJ2TBJfN76gcm97Mwf5VAvs7zw8N6W75YzXGeTPcmzwV6UTP",
  "key5": "3jzavwqgyRWXyBToMamMsyWCZNE7C5AVWKBpxo33sLxuP9MkxEJX1A1PcGHETxpHj7gbjww2eBGNHygVCsEouXbp",
  "key6": "438aTNFA5U4fvm7Ahdb4pB6WYNUbtuWUPf9CdVJ6ayRk4aEmaKqqHCGMy2nYUpCNDZZtQ5cE71i3Dy9yrmXHJoaT",
  "key7": "43pnGxQLZcY4SXGYVVBp7SmL83ut3xysmwiM5rG3e7YfJDeTgXED2jvzgqR2aQFAp9B841xNpJVVd2HoUoqReVEJ",
  "key8": "51FF8o774ABfxxG69rWEsL1yggfCwVGbNWycKTZSrGGc3KgCHLDMPPM3pfAXc7pTvbUWvaJpbA8fJ9AZQUUTdUB5",
  "key9": "4RVuC8ziN3WcnzBCfv6v5o9thGasnvDqhCxTYRzCy52VWhdvXsJugzr9uYzyCHQpm78VsbSkS4dnCRhWBU6o9pCW",
  "key10": "4HJKq4JPqBnCzB18NWJfEdWjWeaxSFuKDiBh92zgTbs4bmgM16YdPVkteXGVVTcY76vEUjkMj5yci61pmxj16N2v",
  "key11": "3oTTP3FjCYDg21znFK4wY7MyrZufB7sEZu7NgcSPKgELbgiRffR1JkrQELuQbn2mAz1PpHcPDt7KLNcnAao5NT2k",
  "key12": "7qik8SuDDaeQnGsStQ4Q14AdHsvg6mSoWmfQzpTL9CiSZykRoMN2jYDVWRDMTd6wWTTh6zWSEqPyQnSsSemY4YR",
  "key13": "24TW5uzUjV4VxHpDMhSCQvTB6zRNF5Y3m4DiAMSAZyrZsjjz73BmPCarpYGWZ6Cn7F9B5L77CjNWyEAv2fEFKQBU",
  "key14": "65fTrExqg9kKBvTNzAcuxkJWX1nkmE8L3iAaUYuV6bsvgVbmotUETygoeCrB8xNMnj5kRJ6VUikJusro4nvQwr4m",
  "key15": "tCGqdVkr6v6o4gmUgxj5MZqu2rjTccKe4DbEbRFKRNFeYDT1Mk4aSzvWLZ3Qsy3Q55avCUdnZsuhXYCWA7n9VXv",
  "key16": "wmwFPmdmmQoCVrzjMAGSG6QXyBK5UTi9a1goGXDPk2WAPbEWUxbE2wBwJWrZDZvepp2VfqYJQRXbz4LSm42skSk",
  "key17": "pnDXGrTLfaD5ZqjspfYP2N3qmrgY7NzH5Y5Z9cyRGZB436qdLaxejj18hdDog1tCxaMGAvZyLCtxRtTV4bTQBr9",
  "key18": "4ErGYhxU6tmzPQgRNB5D4xbeeY85HtykPErSgezyMeCCvR8aTcHXueqkuM5fX5yNNX2gTweHAd8run5obMoCFWqJ",
  "key19": "2MUw9mTYdpNrKTJhVncF9WMyZ2NKizmJfmZ1URCUnj8HiPZTvA2tpycUXKV3WBKUcUZZB8j1P9HcDAKVfQfFftrK",
  "key20": "2yGMx4aGv3BTxm2YYif6cdasFtBZ3i4zLbCTESgNbnrGAqEsnjQ714GGkgwAPtige1C1VX7tga9kJAxSuYwVFh1X",
  "key21": "2gReQaE8ChqiXcwfRSbfg28FT9L4BfKrWh1qdPpxzBHQi7DeATWL26bNm7MDf8eUXFj1o4bGwMMjHfobeJaF3f4g",
  "key22": "21n4ftD3dPSUsaMvnkFtbe3jJPRCHYZXbJDrgXZL6Zn3hTQnkGBGn8UqxWttd452fs8augi6LznknCuZiaSjBgwd",
  "key23": "6576gv3kDHNJhwsVcRLJ8NP5r9mpYHSGvWeCpsLnEeASkYc7LeyYhziGn5Y5nvitXNPBbJ9LEUfVxWEUfErXyGGF",
  "key24": "5hARz59aDFwaiBo1NFFgEyVmJsksa5eqJBjzZ6qwraE5ppHFct1vkNm13cNqm8okvHjLFXBFUDoxnhf2PM6VbEHC",
  "key25": "2tzJDbJLP1UNP37inPSguUELxqksgtVPbg5obDVuDi2GpzQ7zn6hrYLCqNe7QvN6ok4CZKoFoYbbPEHRxc5wQNb5",
  "key26": "2pcVKuWvaNKVnC8yAWyaj4D2MJnDDZLdZPhzbpVqQLmWKsyTYgPeekDscUYH4aKNBBkHd9Le2gPQDpZm1qNogvip",
  "key27": "4e1wyAfqZhKwWaJaebH1AK5nLugR12vsoLcoxfZwwM4ebu2FFdePkAUBK8hAHvDjbV9S7RD2tojEB22PSPpdxbBq",
  "key28": "4kaB2Ab79cy6jxJNbyf2sH7pQriNwKimeeL9r6jv28bkaHKL4qxwfirzj39BfAXBxycWwHF2cK5ZGhYDtewh4LDU",
  "key29": "2tmTisoZdwyUutZvRYvLMHjoZyW9TWB852Bm68ByvoAnxRXofLfLP6RX9PoxfJ9qP7jUnFQ2AciKtYBFBRHvuFKK"
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
