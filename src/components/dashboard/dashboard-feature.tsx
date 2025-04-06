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
    "4qm9NUVShGAXp557qLTpwn1sX2PTkmausykvUKZVpYc6hWzHueAqgjG5bu42DKWEnJxTvGYn9VUXX4EPZBEvYk7u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jPXf6EtoS4ACCCvtJQRH36ZbcoRVvpmXQtkrodfEZRcHbNpoDbQiDGCrJ53qkuBsk8H9CXrK49pHUoZ7wH4KsHL",
  "key1": "4w6Eg1Q9sCGXkHvhJow9PLLNnezMyjGBRtrF1rJZpCutQcesqwDcgNchkAGBBxxuf4Mhru3zhy6TkUnkNqjAbS2y",
  "key2": "3oLSTdi4jfUPfTRFLcKfHrPV72nX3KhDNpBvvtnKT2JvCy7RrCYBp2QRa1ZYtWz9cfoqbnD35fULMajo7Dg6gTgw",
  "key3": "5j4McyxpyucnZj26bpHLU332UciLytzARDKJouzhxBaM5xavPqEhVXswBrrGsKC4pWDH6y9nUBT6Dr5pALW1i5tX",
  "key4": "5gpg5KPWmBSKorXyednWUg4jmKyR7qQxVzkarwFJuVjri5uLUDcyjLi9QkZ2FnCGYXNfECdQGGhW2osRNzxS7HSf",
  "key5": "4MvYpdBsEoSDBWRhKy19AWCV2b3n2XH4Vvz6Q6RyooWaHdBKQshp9uxRbVQAqQ6o4xNiAyTSrkLBAEc5Xn65hzVg",
  "key6": "pR1PPJgFDLpQvbGWLpMtR8LDVgc2sorYCpkexahtLojkyYFPdi6xx5UrhMhfPisyc8NYmV982Zkbd9DZNRwQ6iR",
  "key7": "5u3U59Y4MLNK6sdqNQiHAiVXY43tP3XrvxLZypzDjtpx8jzdH474Vamk7EEqZvyXzBpfBvpC7T9UQUEHSRa99Dbr",
  "key8": "4cayiHsazzp2LaRSYLbzVAYitrvDuuUhMaYgRY6J1t9QERcvGjiXSRzNaAReLdNqHMPhYutrrWwKUbacWCVxhBrM",
  "key9": "2FE8taeCJKd5z74wLumqrvpzHDdVQfJxqC54WQjad8HbdMPUz1e9NcPZTT3n5PcCYQs3yn1DeY5RXiiFxUDB5yQQ",
  "key10": "4V8qUMbKgGhxGiQCrmfMipGXrfbnrpreuzmjGE8BWE4g6SuB2X7PFAfwYrqFGTrkA8DGyD9ykd4VddMpYQ9PEEAV",
  "key11": "2wGmtYVHbYmQREHv3haP7VRbdyGx39ZKv7qXt7N92gLzdKqpxfhEpDDqX9xwMR4zYH4iCAJWfJJ9U5VydtF7VQcn",
  "key12": "2uLwEQFin2xU67maeP5hSqZyJVA4G1dNLBNxE9BawUske35wFv1Vt7nj2UbfD6Z11xcVHd2svYjaH5B3J5jg4PFg",
  "key13": "5tLfKbaRARsMwwjMpCB4dDZxRYhU6J8jHAc8ERG1rPaBJkbuLcYHTLAbFM4aBnAYx39LoUq3VWi3Ev3BBUBT517b",
  "key14": "31wg8qEmxHCciCGyocbSGdhuh6MgzQRyPVkhevAfHbSjkezFgtPQNtsDk8aMZonhbHfEbiZhz4qt8bFRcQSbZ6df",
  "key15": "2Sa8RgcSb9cwjNBK1GJbb9C4oNXyqVLUQz7QVMxVoXMCthiiJadChT6mhaXLvG9h2oSpKFzZw4rn3LqbSTbjj3iR",
  "key16": "4bguzuVebF7KcNGHB9RnMuBXFSSTjmJmsBHBZpGj2yAseBpqVYhY9BNBknn7phP3hG8yj5kfhdwvwKspgYbeGros",
  "key17": "5SXRHNVC9dUkMACN4CFF29fee8zHqJgZ7LPauwc5wPVg5WazpC7CfToXaSyT85DVgp6rDFya5rNHBZUbSZqMNfMC",
  "key18": "28uq4riL8yL5CoU3iUGPHmmDNLGo343CGq1NoR59hHomzEPosuFeNhjr5jGjxBjA2RiMPJMjcaWM7uP9T2tb4vHn",
  "key19": "6Ug4Y2o2d9WwAhdZxgS4XMWosF2bec9bmdbMKQ58XdQ56SjAZVb7YpQrENR8qipDJjLRHy1eNudiwMagG1osrnh",
  "key20": "5t5bjXERjVgNiKud4oPs6n2bjTCN1XCQrNUw7mK6yJJd6vYc9a4WcfKPeNLMenxqVD6fPSeru4EWFRynpqxKj9qS",
  "key21": "3bSnEp92t8U71skTxEyHemEgCY17bH8JpCdSxv6vAKggY9THrUw8kqRrMUXqvkLUDpDaQWCbG6s85hoVJnGQC3qs",
  "key22": "2oDZwNv3re9rHJmTTzHYbtyBbmHDpgifUp8bZC38uRASF67hQdxpm4itx6BNiW9qmiRdh2g4y2y6McovjTm16MRX",
  "key23": "4Pva9Yc2kTvHw71nBdGGBeur7e6z7xsaUPn6Cv6Bg72mZ8Xfkc82brkpDQbXro1Ywqbyw39nQ4z7Zz6x2hRP6YbA",
  "key24": "5m8hjBqwMMdrukqKQwDFsk8NUf822F4XBJQog92X1wZWK8RinDtvemHYUZuWk9FLxQSRdtoVP7r9SDrJGXq5vX31",
  "key25": "Yw9WJ3wDjpj5TvqsXZxVwJzEAwZYHVmr8YsxeoJF2YrT6FeAssFRxLqzbfYu6vfd7wyCyMCDC8d11xcwk61W89E",
  "key26": "61W2DsUZJueBN8D2Pn2DrB82HAFmg1icFSGPzmyNzYyHc7SEN4RnJhJNFbAEST5SKoB3Q6xqTUCSdbLhw2hxLbuJ",
  "key27": "3GVGQFmHgNWzDwWF77sYBt59Vf6NeS46dKMviYSZj9DTsmPNm6ivcpxVVUbp75JttajNHaRzP2ssCoT3eiteJxDB",
  "key28": "E3jzxaZ87wDVinzaCiqA1AciGHHzMXULhKJUUF8FSqSix3yLmsrUid8sVZZWf6QPCpM5snqfvRS2geR2XeAQ4Qx",
  "key29": "4J7RdtBCe6ekR7VVqR9nwSGi4HRVkW7H3cgojSFfsZWz7dnSEKY7XzWoQGr5j36DGcHXFvM2QD2EdWZFm3ZMAuWR",
  "key30": "4Uf7VgEbSZT3y2k98wU4BqJGt8PG9x6WcwjzgNsk7vvkHu2Wz2F58r1VhFCy3ox83P7sywxsP8bmzvBwD4KPqpMH",
  "key31": "22ea4frLtJgm3B7u6Z5Th4YR92odhqTwA1j7dPPKePQV5arzYPhH4ce6pUKhTjMvQAm2B99Si5kjSgZzZL2FnNtq"
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
