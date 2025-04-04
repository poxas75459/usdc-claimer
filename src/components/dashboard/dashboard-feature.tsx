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
    "HsVv7deDHVu5kuhaMK2X5T8RewmkE2jm6CD1fQFhcEXndM2VZy834w5KcoLvtz6TsT2R375BBPuh5Fz9A8fJcqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cjyex6d6mK6k5rrKmPmXanjN12vGuhmP4wd54vryz1iAeb5B3HNaFDrc9NzX9M5KcRqdB8D4Ne8X19mwFH8VgTa",
  "key1": "2xpqYRKou2htH3C5DiFJvThwMfxjfPNUokp4fXn6eHzDikA1GKqt5pFTSXJnURotqsxRRt3A7ZsRT3Mp1Yh8NxFj",
  "key2": "458ocwxydjXbxHhawM8kgVjAGYX8fK6wi4UjaySYfTfSv1E9gH9XzeuRbcq3JTFynJJMCuJNKbfHEocBrPLExzRE",
  "key3": "2SHCByLrcpvEQvrwg6haVW1bau2ZDCKBmrYfU8KUVTcaQM4g4WdJdGYPr63WZgR3LdoNpSWWr4yhcgdPuMVFoAA6",
  "key4": "5NqUcLnTGvEdtprBDzbkLug1ZUq8widDE4sL6UaG5Ti72oZoAv8EATyv7z34ENC8bPbyrr36dafGD8kK61DC75yP",
  "key5": "4CUCZZS35uTQvGeozZvNgZeJBKn1hGA21iK6Kcq69M5f6z7gCHQEseQaSc3iH5uPyJCpVHfmnQxuacjoNHKDwwGW",
  "key6": "5p9hNRv8BVAyo8LuEdS75SMDQTPG5rRs1qFAuGQsSWNKksc3oJ7msJP9GDsobbtsMGeyxrnQJQNApXn91XLjh8jz",
  "key7": "28R9mnfP1X8UhboEH5H4RgU3DHyXCCqau2dj7C8b6w4WvEYJPGzx6gbZpm987pyRichCQbnJ3RomSpCj9pmFJzj7",
  "key8": "3ZXMLhDszgmxmkJfgvoCbMsLao3yn2gGJyxeJnZxZP8Jiq3tqYA8hAJeUam2AcirkU8Y7uUmFSwC3XohH9QX7ymS",
  "key9": "4X63foM9ENNUviXjmrZ93QmfyQTjB1J21sdkX79Hez1NNTp1S1ohrP38ALfdsUtuYdb5DHw3wyTuhp1VFwJ8mu5f",
  "key10": "hj5HjQ8LPQw8A9KEY1VdgSqQVDhQYpvFiRB9AnffNnQ5ZeoDaWykXJe5D8rwf2xqQH1Lrie2tqSE8pur1EXh8qt",
  "key11": "5JXPVa2kKrUKEJ8SKkx8dP7hjn6QMAHQKpjaqUygwvcL6HoS6v7un4pXMSpMVvtQGgfQqAyGnDfPyWi4sXBKMGw1",
  "key12": "4DgZ55v2r9s55H8zc3VonTgdV3mTvE4emafRvVQgR81nka3cwqWCy4WCH5xQpfi4b4DJq715udetG9yS6E2R4Avk",
  "key13": "3PohrN722bvsMb1m3et1izQFGisjma1RVeVcqtbQ2SuBKvYVSXDtog7N2hbbWubVemDPW2JCTDw6AHs2KSrQanaR",
  "key14": "2rsh19yD837j3Q5FEkjTE2aRRiCoVLCcLvjjANJQpQKHUtzq2duvuAbt972ctQe6jsd2cpua3w69ocE5TRgQZgUi",
  "key15": "4mrLbqsu3APxG578nw968h8eKDx6yqtRTLT95zHtPLyiEHKgdgQmhPM6bW4Q9a4e8cnJunxvUMqiiwFu9KDJHX82",
  "key16": "4s1HjAxqPWfjHJt2mLez7eCFgz8sMLFHPwcEAhMQC8q12zK7mDCcg9ivEmM2vpoeaviR53wN3Wr2Gfo7jnCnAF6u",
  "key17": "3UJvjSLBXDBkjeFFsKyhrGmv41vdWaBbtJWE9D2fZuUCSPgAL6FxEtkhFLBjTBk3EmeMqi3qQxmnHYsJ5Uws55W3",
  "key18": "szNgTE91cjBvgQHdLyzXF7Cww37AqCD8Kut3331DyiHSNAEDP7drkMRPxnETqNCvxnXudK135cr3ajR8vq26m6R",
  "key19": "5YrpJgGoUtiJ7po9dz1ohz2dC1ZzR95RGTQZCvaZF5zN75v6aQ4RHL1LfRxdxGgtLN4STZ6wyq9DXNQKvVTfBGMd",
  "key20": "aRLmdf9kayvs4j6ubV19mXF25rwNqXH3KenR6yqKU4BEb3Mx9hwMAiaTbzvNyGGXuk1MJ8vTAtPFMBeH7jyoajT",
  "key21": "1Q94BCfGHkx3vc7D4rC4QviavRjdJGdLa1kCmve2zvEx9BceoTkhV8y7XRfkonH8x1cnbXzkEWGtgQKedFUZ8Sp",
  "key22": "5rcrLzXstT6s7p3Jct786eKTW3VLyJpC9NBNBCk7JxAqpWT2vhUxHx8LEF8roDt4MLNfMNx3ZRPvQfiVDTsVkz1i",
  "key23": "3iTAmvhdKWAVjULYrGKFeJPmNQVYCGDRycBMVmxiR2NQKySY2Qsc9z4HtyideJcxLYQT7z7DC3mbmTxyHBFCvHf9",
  "key24": "2yV7nLEvyxiBLHnwyHS6XV72EufKiKHsHY4JqM6y8tCa2bywgirU9sFDdh8UGrsj3PsQHzQ7Zk8KtgLV4Caof5Qs",
  "key25": "3NFHMSoVeJo75LbLcRAmiGiRWXhBGQXAreJfkdtQRAjCLVhXga9HAXgnZwewT1f53JoY5EcrpwQu8bzfAU6vVswW",
  "key26": "52MBTVzgLyyFjBk2QGMWLsmr7JoQt7ZsaMYngHmP7tpSLgDm4ZoG1nVNrNGmiwW2PYL6guJHK9tT7UT4vkcEzZdY",
  "key27": "5uhjB8rFvqNyhBjWh7Y5h5NCBSMUCWPDDmAUzu6Ek45vgMAiCKAANkkuZSfGeTeN6cHfUPm3n7PB7XkZKXtjgdNB",
  "key28": "4zXAHvGTW4Y6dRnPr6bE4dtiRrZT2tPnFJr9n7F6Exy3PU7eRFe7bCZfGjrdW6Rtb1h7G5aTDMcbH32Pr5ZgFFoa"
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
