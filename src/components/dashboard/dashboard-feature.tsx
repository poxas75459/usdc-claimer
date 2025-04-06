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
    "pMLxmVnDzrM9WZCioQRik7n3TC6DcnB4upuTPV8HbbgyHAEUAMQZiqjpX3SNzYLMQFgKosmXLx5LGnzrSz3tgEP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J31DmYNgLWYWihoZHVNDqeGnJRuHfuzg9vWBP5e2AJxJWTdHkaaTELb3jgwZumJqKQC46dGErwoYb5gcxdYSNmo",
  "key1": "659j6suHuJDzUyoavUQq7MWKx562ch9Dh4CBYuJH9h5i8HwCwxgtuEf6QCVZNdcacZNnqZodaAAqdvnJoYVd45qE",
  "key2": "4f92Kpt844yz3v442h2ELP2SamzMGtY7kkjdiNYSaxxY3jYb76GioT8eK3C9TyoaJQMQYbbKYtvQMgd5AAf8wwKg",
  "key3": "4v712FTsSZNbSgUWdFVXB3LqDPJsSvkDN7HP3WNpGzxdetgKEHGvLHMR7szeqwxTcVR3saqMsLC6ajmVpLJB3x35",
  "key4": "5v91KG99mi7AcdVB6Cy8jgsQ4wUS9vBAvBofDKWNNCdTqrcMVNAuNE2581HSpRRo4uRShbcUKtToNKCkQMP7HUHj",
  "key5": "vQoDsv2zokAxgLkMficasXf72vukUBtadoy6zVcVPCsTGXN5c8tYcyXKuLuh56mnti8H6CUzZouJKPfNjYa2Mtg",
  "key6": "4CoFt7cYStVxPrEEw7NqhpaCCKhrzienX6wSvp5izkp9fbBFknmhiESTKzPGyKAPkuhiuA1XwoNAcrH5FePmju5U",
  "key7": "2xtByZgDAa2h64a3FNUm371AZeHGqjH51oVvT5FKz1TCk7wAewbZNeuZnDxWVNkjoWmdM1uLE9RskutnaaqFRrJG",
  "key8": "5Yo1WBmHF5UFJZPpjZKhZLYvAuCdkvr9gRWENecGf9pFY4pyLtmbarSU2mPv9rrCW16sRHgGxS482hTgAHdRchHc",
  "key9": "22hGirdb7eKw6hrVudpm1MMBLvjMxuURdqJH3zbq8iNSvYRWEVPJ4DvHiVkVrRpyKbXRj5M5N7TuWTdnwTBcWEZu",
  "key10": "Jgzr1yJqDDBt6cnqM3zqnmtB9NjrWqVAGQBHUBNijmtAYVKyPyzheNXJncLwzAk1gqnyyy7RwBMAJBtJGxiy7TZ",
  "key11": "5GDWcWfing9dvut5siAbBQ9drXqjxTAj6nfNNabzPMhNgygVeZ49zkXGa5u8sQeJeRmPk5eMtnJp9zrk9sD8rNvu",
  "key12": "5pgYSKUTHMt8uJRrdiAUhVKwWcveGvgv9nddgDAMQyKDPV2ou97Psy5Duw3nfpbjCnGGnUnnvwgeb6D4wkiF8mqf",
  "key13": "52wD2yhDEfuHRV8ZQaEkwh1WZWLakoABTAsZrD3QYPFi9diW8KrRagTNR1997QoLFzhX7zZWBkCFCfLFcvhYzmCv",
  "key14": "5wGsrmazqWRZvfWbFi4ymMKgYrmLrTf3x17HEL8t6CSb8UTFne31TSDCY4RTJ93duELa582keDNYqJwpPqqtR8eV",
  "key15": "48e2ZCFamcSj1uXPdUPJC1LncHCKrxHqG1RdJpJ6C7RRLtDB4pg2aKZqH5ouNzQJLw9cNhsgTn5b8EjzEW8DfmGE",
  "key16": "4mPdDvcS6knd5oxSP46vUdXtTPddFbYL8DHjNdzx6tDHupVhVvJywKPRcxgTTEwWiRT58N6oeJbYT6uP6bBvKfMY",
  "key17": "NtgH9afaxaMd4XcNrj1ebNKJphcyKyBVg2CYQixZNGFt93Y7JxDUPxPEShBVHoLRRdvKiQUwJKYJndEcz9dn69J",
  "key18": "52VQCBoGG2ryR1TPF4P2gTPRLTp2vdBcydBpFmTbT5aYyW4aMthz3JVyJWXcABgzNXPbpg9mNXo81WuU3j7uCS5e",
  "key19": "4RFYWcWNydYmR3ueNGkbBjpZoLZTsu7xu74diDppo2R2n73okKiV6ToUQfD9zmxtsp6Fcyx7FBb1RrEdp7f7hrzF",
  "key20": "3NpYnXesXfuaNUzyvB4CtbazoobvH8XViGUboCee73JsxXQdGTT4wXPMAWEVFK373Mcn1XhjAtnaiUPUnpjodJ7o",
  "key21": "3c77Lt3c8vB9Dpp9umAVAoLWwMWF1TG41NRynf2u5GWAvkoHYfJ9VFo9hSXw6bUnnr5kqUvTR919ViU39PEHB5rm",
  "key22": "61cstaZCpQARAGwQirQ3iQrRtLAG4UBCv8iwPJFWkPDLGEtY6LHpAiCmySAcBteEzStSXm5fvqARYHmfrcViLLxG",
  "key23": "48f184apPjTiKf4sHcuG9xgvFGiTf8v5KAAED6jXcwVGHnEjTGSks4wGxbmpvQCD99xCUXm2swEvZrrH1C3wEPSB",
  "key24": "3LfsWoQdXmGVsQ51qkx3WHcwQsUsChoqUX6WYx75nbhANs7Daapn2ffbCt4cuFpJp6M5kAwVH95o7E4TcaVnoNcR"
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
