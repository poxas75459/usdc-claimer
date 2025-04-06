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
    "3tUidtiYu8UQeRFDWBp512zVy2NEnaiiM7DfCV4VCU92rwXZctkX2msmQMAcUWVmyAdDK3cvWD6XaYuCrJEHpWV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bbVPjvq8JorbNt5rATGWv6FvuvMH4uZTDtZddCtNn2qkCwdtxBCfELRJfndWTecYgcc9zRDDKq4hTbsQpiypNKF",
  "key1": "59GyGa4Uti5U9YZUpSFyxDN2qaAanL5eYR4DTQYYS9p3eaKZbepdVNyAMuyoBEbMnS9UzDtgPuBZbghP4q9aLYfS",
  "key2": "5TqXAnQDJYbdTuhEqmZRbpvie1dbNpktNdz9K1tp9JpYpHY7cmLRYstMzsjXxs4L2hzzJpaBH1pVFaNH8VVNHRBX",
  "key3": "2Aobu7iyfvadsTWtsyrzkUEfoUS4w9NaqmHX2UeRvcwhAhWAdKVpvt57ikm3hH2jdLQnwLGP3VuoxK46z6dTW53a",
  "key4": "4YLmhZ53EXFBffsXyCgWfZQM8Qyrbk2gN77Syh1qsWiZpKL3cdQSChD263o6erHmFkDUZu7eWgnZejvBiD2hqHKd",
  "key5": "3c1uXQpCvdR5zksfXkrRdj6XbmhGjRfwr81RA6Ndz4mGYUgdJndDGNSYDVAPm8sYj3U6h7yd9WSNSwZMHRAC8Bsk",
  "key6": "eu2NP3skrMbuivssYjvUyEmekAbErr1JUst8xs97o1Ua6SHUtp6yQUfx7oP1BD3fGjjF8X2vXJNQnG6LXnGnFFo",
  "key7": "Sq3uZTgPXqDSb8ZiKWDWWz5F17RLnGDFPiPT2XwwsiBQ5c29mkHx4cHRmXjkaNsLfKEdBgVcKhDcqf9qiByvWN4",
  "key8": "4eQ2qaLonSmGbWiQXZDrBfL9ZyTD5GXZBdavD3MRVNq9enA6agj25eDQwsYeWKCibC2rK21hihCLLsec12AUFuTF",
  "key9": "4FYMBVMPSq6kz85MWFVrcd8qMT3CSLbgvZSfL16uGA8YV7BoejAfdeN1E9nnCa8JEQ9urESVvz1APqbdAY4Noj5i",
  "key10": "4LZqWnRHEmozhJXeTU8r3PgoAQUg4a68vVfPWhyqcnrJNLtDDXv8ZujkLifkpY7CQ1ssXCxfwPPNjUi4WPg8U6hT",
  "key11": "2MFm3bJDB3bqWCx4kx7pKH9yBJfdaHY4MMzH82CETr9Q92HRJQEuTVnYJmFUtrefqjj8ZgjWRhT15hgkRHeBU5dn",
  "key12": "2CpBFHHbUuxoohaWMsHNaRPNcPR1PZ8EcpM9cHBsWz2mGCNePfSuG3sEEWQiGde8GtpXF8mdAHSHDEvGdwyNgtFX",
  "key13": "5m5M4ML4SfTdJQtceU9kwKUH8d8WcRB2pnoLu7v4UczaktYpxvJHQLx7WniUEuvvPrjjkaMSKtAcnkouaPpAxCd9",
  "key14": "4dd24Rt5yTdZ4864jUh6ojLRbJRjcDcaaU8Ld2CHSnhB3qXkdpeh8K1XLHygBRFBHV3C36qaXvjagGQdVmvPaqBC",
  "key15": "5GExJhk11sZ5SjnwHN7ZWV67caNGnK1KwAimznLMRZtkGUj9aPN55vDbZNQ2tsnXTMcbACVYjcTDZP31XiDPFZig",
  "key16": "vvQerV9rwHeN3ucbFNBYbYYi3pinLo9rGg8G1CYzxpj2eXKgPks36qwRoS7F6ogmBXreBqvr58yGmmevXHkQLcK",
  "key17": "49a1NNzyBDjCzCaVoJ4nvbLPbav6q7VjU5hLrngV6saxR3HzvzMk7Ltv4DRackJ6MaVDKpzVUzyRfsSWnPag3HfL",
  "key18": "6149z29mLQfyHw6M3eMLrPgU1Lg3v9rE39xhxKBvnLrfP1BkuL8YmMX5W2Gc4VHdrE2k9ehxJPPZbnyUKmvPSRdW",
  "key19": "5ekxZ4W8hCvWuwo5g8x6AGYqWb5StrWwprbzaArEzKc93RRA7QPxYatraFSKMGWhhgtUZrhxx3UdqXf1XYQyEzu7",
  "key20": "2Nf5BEiaW7ki5wix8jJtAURpaaK9rRjbmn7iLYgVq6wcWXwy9cpx1txvLk2wB5uJrgeGqQWUMfjN4U2b97fKnkmz",
  "key21": "3UU2xkmBaQZH6bKu8bx3GYWrumzHhwWnD1CxAWwwVX3X4qqncdohmpdEXkWgpHDLRbnN7Qg8G763DYYpqvxdooBj",
  "key22": "3QUueBLLGULL6AXTba8yRocFpMbh6oYgxxw8sGJertkoQDHGw81QaJX2W56HJCdYQ8M4gT5MLCACd9RUWoJmYpUv",
  "key23": "3vrJYQ5snaox1vNgKsU45xah55JLNuhT6aqfRThJJb2W8evKo7eX3WoeR7fwBNjG9cYepMriZCzLPPSx17wAFyit",
  "key24": "3TKjd8AguaULjg6AbYVwK2grWjndPhU9cjHeHZo3sV9N6pDsm7HpcBsUnxpS2uL8jF3Cp3t3ZPrjpgQ1yheF5uwY",
  "key25": "5HtyFJAxBwNvrJUiJ2ZuCQGCjsY1tPWpRCNoaSdgS9ptRPWfCkr53f4z1enfD6sfg43W11jkjKcBAsSVEnTs7kyX",
  "key26": "2mRdDfGQwUw652sQ3xKgQqTVNEX6AKPp1MDCoMrgdnvdJ8vDGLBcDqkh2ZcaaweEvCUyA41WiFQhuKxfZ9zsUMFy",
  "key27": "1TEVZytdxb5qYxyaJt2oKio2QxMzBAxiLLmq7HEbCZxC8ZedfYfisrv7cpPREWNf91cNdrpaXJhrgBpxdEdTNxf",
  "key28": "5CDEeZa4AUM4ry25MXsNTeWCFAEUpiEVzA3Ujm9GAY4XVamG3sW9WrJtKnTCB2WQkKBCPGVVm86swCG6P8X8kuJ8",
  "key29": "udnXVCqfEVUbWD2TNmQCxyawrVfQvFQBMiuXTGb5vBsA1QhuRiArkYDPCqiMQByRBB1asJYQqeSNPs8uDXoBdhP",
  "key30": "3Vyx8xKPe6MEN5XUVx9hpoeeUxY31wwSExUBfjzjQYqU3kgLd5Z11YeUdwxWauth3e1HmyeTjMHsS8tKqrMUeHmL",
  "key31": "4yGQnjThGydPT6KAC72xqB7rLrYxLT5vp4yetgmmvE3hCBo6oTZHzPCmneNwMSX5gZhcSDTS8TPaEDqGRsb6QSsd",
  "key32": "L2xbVT6VT9HBiobB7Fy4aX3pGhGuwSyTfcs5ar7fPYMhqsdaAWNkDgfyZ5mHbmF7YtrgzRvfetyySNuHnywKDEn",
  "key33": "65kb8tzWdeBKykPWd8SvAQoiE1vikSxCUviEDHDrQsPfcFndtSXhrFRt9k4jQSaDUy8riVP9r4d4T3tzjjA3cALh",
  "key34": "237qU2QLa1D7DMxVhAPRphT9mkYKeBa1LSLN65wroGy9j918vtR9FicPhaKEpqMdhfafigt9vyFX75xbwyrF7szn",
  "key35": "R6r9dnPCTceHgpuLFGgwCwMYEgsTsWe6KydquQPiPaQXkNb6H95iyzSWqJp2R7rnuyKapA96D42FpRn7zWGecS7"
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
