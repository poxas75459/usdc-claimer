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
    "2d7F8x3m3hRPnzbKWrHrpVW5YGLoQaetLwzen5Qv27jwTd7a7RYqEfS2gpyJDrV4yAhGRo7fFfMhZriRC6VwCAD6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59EHACRdoEtn76RLNN7LTdaaBLKxGe26KhjLfFnHbmYKuLJemUz3MTKU11zbpuBG3ZvruC6AqZsBJa14URyNkahq",
  "key1": "Wg85c9AQ7Woj66GrGoHQyUj3ZLwoaXPdPcULisAktbWo2LRnKw6kzfKgVTMcVZ51A7EAeryF6WahRbMTsh2bmyN",
  "key2": "Pi5vPjVPg8pc8Jcn9CumGc5VnyTS5nV3keC84zWWKsab1AMo2SmBi3espKpb5YSjE394Dz4bJmU6A9iHuniAh9w",
  "key3": "4akJ9X9GqMAd7YhkMvrmhiEdkqkYS1FihVe9Awbt45pm22WiZLAuhivpznStJaaLUpdCgMAsVuoNP3V9Q75gD9cb",
  "key4": "2dbTKy1aq5bBQEeCpykfuFq4W3eAXS5iQBBSL7X7bASJ6jgkKwZiuEjdMEDYs24WuU8h7kVFT2kAH83PUrHMLC3c",
  "key5": "53hRdmgPd176hjNXKNHYzoH5DZghBjufb31fnfSNnTpMgfGqGVDRqwkoTNDcezSadps9ix4RCqZuCoRizSPcESeK",
  "key6": "5iSTruq2SVLU5FBe2z3acxpJ8t2d3xTxm4aPhLg3y5RLCQJ4Qdhv8eGjZuvesZx3TDn1kAbrQzBP7Moz5qKfX2wW",
  "key7": "5THtFrhy2axWayneafsKc8mV2TDqdpE5TbA9YyrkKiFypvJAUXLDpPMzyZyfWeNWpHJsvEFvxFibHzyFsMhm7PwB",
  "key8": "58b3QLLVZxSAmd3oaWxGbyXTqjPv4cx8sMaP4ZMcQyh2w9VX4Xg1onu6pMmZaYXHLg5wmQwoyHajyLku731xAJME",
  "key9": "4u87JSmxAQuHHtcyzkXZSAvjr7U8THbZQq23YCxR5PZJanWpuBTR2JGnbtDJ3mpneMtcaMJ5nzxkPpTQUPP479Wa",
  "key10": "2FeRii8UwxTKMwnwiGDaXir7P2PPyBZGFy7ozeKfow9tu5KCzh45n3NfgjHgfPo4dNbExvLqLwgzQmRY6jAeSEnZ",
  "key11": "4NoydY8ewbFS724QkrxK9DHiLEajEiidJRCwDRW8NA48xEdFcbmB9HtyTc3XTgWef1A2pHwFNfGDq46obRAAEQvw",
  "key12": "3RfwjizBm2jPbWgUfwU3bogmv4rKHHr7tNAhCp1VtSqYhSjHaCmHzY3wvEYUdURH8Z8oVxjvZMvYjFJA5TBbvZ52",
  "key13": "49uFNMAKfFHUQ6Jj1BESvix8Nd5FzDDHNYVngt4YqUG6mtrDdB3zSWULFXReJ4omTzCHQQPbsyqf3fubNMYyEyku",
  "key14": "3V1NgCFTZrmiZLuNfAfGJMDAAQxt5idLb8xEF5nzb5VL5Fky8gnzNMFZRiVYwLxFiHbxnsy6oV7Uj7JAMkCm4vBZ",
  "key15": "4CFBQwKtJgmBGRnSKE3cGznzFs6MqGw7DfEvM2kPmvs3P3ht5yonxXZhi8QCvBdfvsb9pnpoArotz8LGJGjtfDwB",
  "key16": "2fRiBT3wja7jkjqUcfF6YTMe7Gyvdo5nScfmojyFRwfPH7Vx2wSsN3a7y31Y3gnxDXcMSpA4z1ZKijQaNqhcxz8d",
  "key17": "4r5zeM1yReUGrkZZF7LDDAq4scghjgNiFwiSDashGYHXCmoUwE6VPkQVswKstRxEDzrXH2wJbjrZFMkKXbixsyu9",
  "key18": "2wcHBgKWBeKGrBWQFWMHDsc2PpaEMio84oa1uJxbRKPAB18aDt6tcdFyDwajADZ6BYEAqriUQS4NkMhL878cajuJ",
  "key19": "5mZ6aAuH7UQzQ6cJTpitYMc6Lfkp2bKTkZADjR2GC1thttxWrNxpoH3TNRxJdXY1L9NT2MFe1ngeoVcTb4V1kYLc",
  "key20": "4ECtW4eD3xnGphwsvhRnq2BQnE9ubUnh3UT94n2mUEaq1FtsxYDQqcbP5GKsuJeDjgS1Kns5KPwzy9LkzKRAcazM",
  "key21": "5AHEX5JnqyzH9DqNfZFiZtGL9XT9dmU7rCajXmim9b3SfbpzZhpprS1tnUudWMQcM2J7R4MtqdLsohDYdn3rHm5x",
  "key22": "5Xp5QzcSCwbYxa8YsuqZj3sX32CATuiWjMN61WS3LkUQqGddNyGEwa1uDrkTrDS4EfNewG1ivYEctM84hRaRtXzM",
  "key23": "5ncCQ5rcmFnNAirfDM9jK75eMkLHUVUNXhn7rSR7oGAFQjAihZruMNNRsHBVaN98eGiutcEPv45ukVCm6LcVNq6s",
  "key24": "GaxKpdCMsy1srnbpvPBg2ZQDVE8g2RT95riJEm4UhWMYDhQYRrpbyupB8S6F6szBoyrVRFoLtKQk96D8AvYors2",
  "key25": "5CJkjSfkjuER6ZQsfznpSiT9uxBAKgmMahyA1k6XA91HS8mbwqErXgvBUikzgHrcL4XiTTcSUaJZgRx544vFJQvF",
  "key26": "c2K1qqjuRpo4sjyeEuUtQZGG7cAizopTAPQwwGChMJREU4Vu7eUek4L5oCedJMPgXriApbR2ZgLgLwsqG9cJEfe",
  "key27": "Wrb8XgTg91V2gSJDPVLFLcgX4cvNe9sLY4CbsTiwh1V5gZUKK3AsuabCxPcrxyZvBzmfbL5h6uAM6hn3ZkJhmvt",
  "key28": "yPXYZYBTJJqArxYMmKaJvKcpcn3Q24zsiTPxFwjhBsSJ7zBJPGdHsbpcxxVSamYuXyQKcTBqD4nCifJeRg1W1f8"
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
