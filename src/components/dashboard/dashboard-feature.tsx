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
    "33sFjN7pRZP41WB3H6DU5iYYbksV75uYq9JQ4ZSW8gPLHcaGmfxvmEhg57L9dopCLuBvXAxKn92TmRdSH6xV1MCm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bPY7pyWsqPwuc3jF33oQn9xDGfCE3hcbwJ2kwdbgmPK4RNV49D1oBdFwe8dMRmhaPku31FtTWJkjneiFXdkMGuP",
  "key1": "33FsAK3a5VXSU8dxi1jXL2VE84tcV5aAbAg52n6NfXsJTjS8PrzjLUP1CV4pYBXWKWKDSJjeh5WnyhNcf8EFowr8",
  "key2": "2vz1e5X9njM2oX1UXVKct45acSF659XnjPUg7JZ4jrkRw3UJVr5cGVXw1q3GDNMHwEi1URv5L7jKQ414FHLSQGqD",
  "key3": "4fJz8PqSUN4zvtbZbNphe9BCKKH9A1ysSxMFMseyTv21YKXnADJonQkovrK3hYiWFMDRFS62hRgfNGgvfui6sFGH",
  "key4": "21XgpT7ijGSNYKJqFm6wSjqm1MQuH4Vpq1iKe8S8GjBsnjFMk2TrkCyesdjvgXfiuiuVmciPWTb89bfqCgTyWxpT",
  "key5": "3tsZ1FjbHE8UnXoqAn9s9S1HYMoaPvvffgFU9KWLz5WwnK4BToh5atnirebuqjBgH5XUyUVNfJ6zKDbmj5oWNM8X",
  "key6": "3qiToRnQpRNzpzrVaYJzjei5D5wsGQ4awPT4YVLVzTJVHgVtdrXmbMhkV2BykL4Pe72yArEaRhnYk8pLctnxbGoo",
  "key7": "4JCfpW8Yak1DP4nGT6bJ6KB6pvmZaMb9DJJSgidUVx9mmGd6JHKWXFsgHMDJDxwJDs1ZsvN1AM8DKdmMFPzzhQNV",
  "key8": "2ehdCjCo1swmrPpPdw3NnTi77xxkJ4qkX16G1XmdEiviQM6rv6GxttHK96mwxxmn5rDzHzxjuovQCubSdUJScSFX",
  "key9": "3K4LqNpEuccsEWd8de7vddovL6tC4QYfzjAp8Dag1jYwn6wTjqUBe9gLhFXwVdwB1LJoM1N2bW3LsEgN3zg1UHsR",
  "key10": "4oNAerySYvJ2npWCTz9svwFjrMPShzZrRyDbEcyrXwsM7sBDob5DW7R1US6bDj2Jx9XUi5mc58qE8HsT13cyC6Qn",
  "key11": "21ZAVknZ4nyqX7mGGe5X75cGt8L4r3kLth2XLMbUjxADviSGJpS4vsJguGCqyjkCuH8rAhcrXUDyQTM8828hDJMH",
  "key12": "4qhdjhrcJi18HWattarAmEAT1VAa2oobBfpVohXPn8apvbTLDduTtNGQq4Tjn1J5iEYgZh1EhgfCGsjRTvE6om69",
  "key13": "3SfL2JbFDHLi2tMiyeL9xcrLPLRiRUvK8sQ1m8xRFkg2heZR51UwAJG14kCHBkeS3BasnZ2CSDd3nSmuk6r4WZzx",
  "key14": "YVBxrAZFjhceeG83oJw72fRpQddonvzWAk6hHGNpNSniHA93cVrKFhWDm7nxMsUj6W5ipfEf83oDPmoXeZVZfJN",
  "key15": "3GJ45uBcfa6iP1VHKsJEgmPkZVmQFxuj7ajF4A9g8Z52rv8JKRBoCsMfM55yZ638Qpi4B2Twx1TYjvB5GXHvHcHb",
  "key16": "2j2r1U68nbbnudy7aYPFDgsp3fmz9J5acidPY8XsUBFbxiFvxbhzD92D3e1DcaCGS2je8JQtAzssQYX9S61y32rS",
  "key17": "4XYGyxR6Qpc3ntwMZsmtC7X9sUQZtS4mcHTjjdY9zHkeaczgk9DPxMwNn2ykv8mwLaKfhczZ31hMZptzVW1Q7Y85",
  "key18": "5TC4UgaqppdcMm4zECeHEPRKqL8T3MxWNWVtZBFxobMmdu5JpdpSRRbmMRRGjVjwAER5xoyo64wR3K55XdVA7W6",
  "key19": "5JKA3MjRBUeXzvcSDWjc8kvnsSby1ais1NuzGBKAwnYZh31roeANktxohSzLBydsyCKfyrBdeurxsnNSPnFd44S9",
  "key20": "2MyzAgLBiR2cPGRfR9sazLi7YJrdgTGCeUM9fRC1bjA6cwiNYZTaEHk5CtqENcF85BAE4WPRLe7iQwniwieW1xQy",
  "key21": "5wvhXkaomecGjumKZwG9NgEB46y5mYYZcmGV6p6abkawCWYxxmZsSUW8JTkSgM69GXCKfBqEkc84arfUMEmBNKme",
  "key22": "2xnLV5EyqSsLybSwDSury3jvHYKTos24SNSUcaTJVmDsfRaA3J3nYg1uACg68ht5E3G7jPdPH6Xcbwx8qCCdeZRZ",
  "key23": "4NSbn3EDhrUzjFs6RHW2ZXsxkH6UDmhDaFNA1n3Gg1AbUgEhZCEPitnbqjBbptVG3ySGrHJVnWZmgxMeEwPBXJ2R",
  "key24": "3bhdEE8YaGjZ1pC1byScDWUBYUc5NWAb2DT4SzsN74Yo3Am6wyzNSe4SJetCFpWELUTSuZ2HeVCFPUFA3CTPDStn",
  "key25": "29ec8GDPtzJYztuhy6nCYEbhTCNewShvxX13o5eQ11YB8PgLnPQWcV5EmrrjtHyEdoJNXw4waDqUhW2m6JEwgscD",
  "key26": "3vpsCBaM9hJSWCsBtWXh37WPJLjVNbsRjhBT9kVE9eLJu956uShUwxV9PaypGtkfA4bC1hToxyAUkJz66hGoG73o",
  "key27": "siqcrjNmxmFNXxcah562EooP14tyWFa7EJut3GrEteR4eHMUaVjXou8hu1MKvFQJx6nh64rmDmvdSRd47Kf1BeF",
  "key28": "42Kkmwicj72xmkxyvnFzbJLDn1x8wZFS5eGKtTvCkEzgz7jTF9XQp62aF7eibKfbeXKD9NfdnNvXoyRPWtNKQwAm",
  "key29": "53y3uon88ZMWS6AZQR53oyke7iUAawtQtcqGrcFez1b2RmzYfRjYWf1VgDQAJS3jZgRwKq5iqFNbiMwRxM6EwMNV",
  "key30": "4eYtQ2vuVZLECpW51dmorynbhby9p7ZFbeEP5R35xsptQbzkXV2Co6ZdayfJ9hRwvm5G1ZBobsJskJbbqkTVTNXq",
  "key31": "3faSL89X29AmEmFLLVPEsdSiJivpHiuaxNs1Xag5jY4JVLBYceMwUpS6UCbRx8zzafzHECE1aRaZ7DdRRcYZ33pM",
  "key32": "5v3FYitiaLCkCBarV63twW5L9Ep2c4WqjmrFLrWgnLr6AfYVK8RS6u1juro2r6VFvEEexBTRogPzTxm977rLnfBM",
  "key33": "5aySKXnNUdqkUedqZCuC77y3WjvaMdcHirKz5gXC5WfGkacDCTDfC4FT9GhB3bku33MmSiS7AaMEiwA2TzeRGMkd",
  "key34": "3biTfkNdT1iDrER6wAaZxPc6yJmXGGD9MhmeBkq74uctnf26fXKwU3cCXcYmGEWUSCLf1Kyo7etjrhUctetTXMQx",
  "key35": "4knDSZrjfTiUZ4z5suM46Cw6RPZQNvo1Ss77WfNUtfKPWqGf19C2R7ChdBCc9qtNkGc7szbSpGqQWt5vYQNvgCZh",
  "key36": "aG7eeX8bYD4FW5GeDMzLp4hGyJ7V5iUGjonXv2KZ7y5E1daDmDaw6YsAn8xjsK4r8tA8866Jee2n27Wq5ttxJr8",
  "key37": "4WSMbnHdzKoG3ooCNr6AXiZYCsEc4J8G5p45SjweBkn1ZemrZYL2pB4YGzm6SakASdFgRWDVijsxBFG2Mt4gKMst"
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
