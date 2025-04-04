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
    "4g8sAfaCpogQf79yseNNN5dwy9KEiowA7ZgvXoxGafNNyjdpQSG5UrJmsYcC8kaP6HYcne9431E1AdHpiniuTdr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FNFD6G7BcWGUC28Sn8MR2GsUbQZ5xpNWidpGQKPG3VM2wr8T9h8mNNmF7haxz1rFwshW3oi9J7AWmgRfpqQQtkS",
  "key1": "3TvWJRMtc4fNpMuXXv7cciohTjXHwX2fu2PTQvYT3xsUMczyE38NFAHBToC9wyCzfpvJudTGQNxtNc4ax1RM8jij",
  "key2": "5K1nuVCfj73zVbdc3NvtNaRoqfHPnzFtfayLjQtngswp81AhWrpVZfep1K8KWuvAGkZNxHMjhAD1CcychhSLf9mk",
  "key3": "4QsrYPFuiMhdWScvvJdsvTacpU8kmz6ni6NnPgBGBDyjHWrsTckmUDXJvsVfFgGasRfw3wQkPD2QQgB5u7khLCc4",
  "key4": "sKNPmb6ZC1QPrkW878kEnVKo7RQLZTvcgcKJVkyyB85tKTwB5QTQdg72HBGZPq7X2Pk5iSbAU3EocpZePPAsrnd",
  "key5": "5Gc9CwXMH8eF1n9LGzssmBReA3tVej6EfxstAad59pgDrExdxknoTnFct19JEP4HpErwqHKU4oR7T3JxMnNQmRmz",
  "key6": "21vsH277ZqGJHpqYPoAX1GSJUk3PuYCD7RpqHbJfX6AX6NJR9bvsSvei34TiUjmLQ4EaEChJDteYY7rxqnQQo58g",
  "key7": "3TRbn5691eZME61PCtoyvJoXuwvxjWBe9yTLLVj7EK3dv8RDpgUWm4hHqE9qQyyWoBmAhwDk3UfUySoLP7ZWZBYQ",
  "key8": "5b7wDqLwL1S57SRm8ro5kL6cLFfNfpDSijMe2jVo3YDjknbNwjrsoVCaHAkfWpjHpGK6SP5LBC8FR2z5u8hgAxUP",
  "key9": "5iPnCmLZBetYkKdRRqwTMJ6H3oJgRnAsk6GARhDsfPzMoB6KatNQuhPSVpqY1Bzis3sJKknjYeBoG72hqmxzt3r3",
  "key10": "3LtobPms2ATokqk4TesxxD9YDwWWNLRnks4ycq8iLMBkqbe92mnyViaRkypwZqCza7tUUyRdf7EVYw1mh1GBqGBj",
  "key11": "26JQbrcJ7xx9RQSP3Hjs61y5JXV1iS8AxC479ApXNffaGTf31owoLEDueBhNkVxJsjzY3yFg8BJCTATEJ7vGvTkB",
  "key12": "5mLb8XCYfPPW3NNyVzdX44nh1UZG31PMi16ZsScHRER9gwVNi6Yh1x9jP3aGatLvwWZNRiVYjdE8uqhHgohbEq7V",
  "key13": "dRad6Sx4eR4d67jqb6iNuWyb1cpmc9qMr4ZcHbcJJ4FiH8toj4jxUzHudiyjsJDZKb2SSyjMw5P7fPfMTBU3Myn",
  "key14": "4njoczByDUGomNEVSTXr3s9LXY7Z3ndr4eZ5zWSRJrFbyHzoNZGQ3YYxPSaQtfXLg5RE6UoconzJxoicSm9eaeqX",
  "key15": "4ZAjWYEPmxUb3Bjky8hD8raxUsaiLKhPhBLqJGtSVWB97ZdcrjN32o9PYhAK7stmxvsfgCgDARSkBxSK5igMiX3k",
  "key16": "5FMGYLiQ6HzucZ8Ugqer7MFukbPRpCeoY1fFcfJottD7ccTNHKDRuTX9XZMKxVUgFizAGDZteDkj7AGi385WAK9b",
  "key17": "432qpGtDwAcqxZoYNmy1Lg5s6yQQnsCiPeR3rtCCpguDGsUgUacLbEAgWjnkTC2SHsv361u3qvtJfGnK2mtS3YWq",
  "key18": "3Efa1opfpNzaPubg7eftXvzxtrPEyncvpGVfH7HvNW3WhbnuNWdZvnP6wKyz1hLpeZW34FXhB8oz6euan2Hq6XP4",
  "key19": "24gxWyd78vgu7sZVgJ8veYVRLs7X92X1yiAhbqNANgoSFEwsKqA8pdvgUag6FoRzA1pn1a4ac5uUV6pnzgsk5686",
  "key20": "3w1sNR5tCAd897S638nkY9jd6gGDirCXLkRScmg6NoYSNZSWSb6B2iLgDyUewqW11uxwADn6KHzW6QJ4tuzdng8m",
  "key21": "4uZzYcghNVoNHZcXSWPh5FTSNzqsASPzZm9Tba5f2yJNhPBQJ1mpqzue9iUa9rP84j2adPM59dSuVviTX4oiwFap",
  "key22": "4vizbCr6BGyHFH8J1vP8r9NFtrYXeCMC36G9utvu3p6py3LArnFWz7gFewVzzbWU8XPj6cw6VFLx6456dN3S6qxS",
  "key23": "dz9XM2zrPz4H5yK7WRaGg1pCSdjtVjAYexTcKvsAJEUH2JicoN6wyXFpaikQmBrdkPkHtXXjjyEBLPzirjfi8pt",
  "key24": "3dvdX92XF9JSPe7KHvTzrfAFo9qxjDU4acvfrjjNLx7qsiZtrND33Xi3GSiGnZEKDgjopQpiGYNaGpY5nFFYpgqz",
  "key25": "55FsXKBFhu1uZNm5uTRxQxhPV8esN8Fm8KHZe2M2JUgjztv64P1iwpQNmy6Ki1PjhT8H3AGXpym4u9eNuAgZm2Gn",
  "key26": "3ckonws9SubBKTDuupopCBuGd35tjTTdysJEyLuvZuLsLqNVe9P1WsVtSR8VqYiiGBgE3bPBYgq9VR4UgW53kZYW",
  "key27": "23bBw4y8srJLrUEm5b1somvdXQhppzed6Z1wBjJCLodsGkhjgs7f2a5PJPArrr4EwzMEvoTejZEuoa64HYLf7cfu",
  "key28": "4nrj7PRpf4bRrJijWxVprZZtiouTcSzCpQDre5N8ZBXHf8HJzBHpfAHm45WtPdBzRryeftFFriR15PugLqpQ8MSq"
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
