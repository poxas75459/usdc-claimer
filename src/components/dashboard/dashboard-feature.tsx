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
    "3an6KxmpBUcy95DkEUPzc3xenzQ2ku2moH8ZTgmfphJgfqnhV6FWPXbbKk5458yeSSdDmL7Vk5DW31qQSqADma3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5stGxuXGMpYpkshGbkU8CDqyT8bsSa2eWjYXZGxtUAPAPHC89AFze9GyKzTbDhP2dR1dBNybUgecWVWDhXDea8yJ",
  "key1": "vFMPQ4waXNDmvgWiYuRZ92pBJmDPipPZsntMtHFvHCPkNLLtMwUbyhYpzyHUwtPsBA3r38YheeyJ9YSj4mZm2Kg",
  "key2": "4S7EbY9j2FfqUy9wXrmvAbW2XL97vwP7QQiUY5Aj9wk4PLDoYfGG5hjDoT7WQw343bNCNfepqErPhT595Wc63jSF",
  "key3": "fXxTUqiHBh8CeecNutJX3LFvWorgkfTHN2JdyuBH7ykHbe8YYiZzuW64ktdBM1H7wceVVYm5ieE8n7koGoQDdHZ",
  "key4": "tacJfqxuPSroTBPLzJyBSYzkd3JkWrppkCPt6ffrX8u9gsxoHtjvVUtXiisiwa4a3gJNuHmnTvyXcPP1PjxVepy",
  "key5": "2DNqYjbwcYuQnWrAHJLUoeaj66rextmB9jrSvkK6Zv1g3PYez2Ld3vWzLZR3DR9hinu3crW9hXgGpdrzGSciJ8Lx",
  "key6": "2iXkbGjcgWiJm7soyb2qhVsQJWHESVoRk2UPc5XvZvzF6WsSToApx1mBPYL5LgXjdmzPCk3w4MwqCUjxHwtVU9NK",
  "key7": "41pASeorrzpgUCZLZSZZrzVmRnwC443H5qXbCe6QHT7WvG2kbTNuLXekuFrU4R6nPmg7hSQH889uuJNUSu8h1ALv",
  "key8": "qEbzh3VVmdH5fuHfQLv2hWnwRvXPre4Pb6K8CzhWcQ8UTCdNexztWUKLXLdVkhVdfocoZoXV2c8dEW9BYMHvHQz",
  "key9": "5nucSq9ZeLM5cG9yS35u7GLngPeu1M3CWGHBL8T9wrHUng2sauLpX8j1j4bmitBeZoRU5ikQpaMHxxubF8swAhNb",
  "key10": "3YzoCEyduWBjCmdMcvKQXCFg21NUwJSnyEfDfuwXs5QGoxGviJHQiBsmXorWetevAgzBozn2KeL1fqtwBYZZUsjk",
  "key11": "5HjnmPGq4mr4sk4UkWmxGLoZqGD1NZXj38yKtVrpovnNHJa1wNRp8xbdbBhhNLeAt7KHjxnqaY1oiDp9WXfmjfmd",
  "key12": "2uHHuo3wFJZJbF2sytCNi4MgZsw3w93kiy5ENezjQDMtJx849k8Xrw4G4TTPszZgQArmToQXbzZas5fg6LunwiJi",
  "key13": "2G13Sm5WuAntPrRopUZNQNZBeHnRXZQjUjghccdut5xZGDF4MBJMHV9xBNEGPpde6QAUbnfe9CXnwH5H1o3TdZpU",
  "key14": "WYr1rLk4HjwsWZG5VEJXFf4W3NjarSiyjk2xQW9NRXmhxzf5utw7WWFRKPUygGovXAzeuhscuY8Zx8swLXgSVPv",
  "key15": "3EGtsdZdswxN2YZLeqwhwWUggLLZHWSN8P15n3wtJf6Wse56C5kzhGpz96H1XxNZY2k4ezCcY1yxYQh2Pu6T664C",
  "key16": "Tz1zWPrE98v77EsaxYBkNAeVwbGSpzvhVRSpZJNYXqSjBuk5aa3cuRGDN4RaVKhdvb8QDBBXZgiJrjgnNiY1wNM",
  "key17": "qtuUDPwavDhDPK2mk9DhpNxT8X664nkvbXNvC4BzpprFEsv98f9MXyZGDdKDsFei9yj7hbYPMNR4LFrWAA2i5ks",
  "key18": "549sYVRsqAPMCVgnHWxD4HBu3gkdyF45xuQLDngrgXyUQhQqcHMoao9SZHrFiBGMcwb6KK3SUW4tKR83wxJFdmUx",
  "key19": "2ZLfr2G6DHbg4zUPxvzTygpC37JsM7GeREa5hi4pZgGturSHAwxLftvRQ9GaCSyQYixuQsb3tP1WhRowd2Mdr4UA",
  "key20": "5GukttQURZyTQCYV6SrFUqXoVHms4TC1G55qrfTTydXZsf9X1k3MGkNsKi8wmqWL9WwZuDDZtCCdQx1WpFsPUkLr",
  "key21": "3kQymdoceaZLihrDddfwCBofqME8ZXtDJN11nMzYtudi9NDjnmHBGyxWy1VFJKtRARGY3PAo5SV6DdQvd6aPvm2G",
  "key22": "4LVT2pm2ZwQjqmQ69RCX5Yhy2JnKgxB2nnRTuavBftioUKTpPBMTYhAsgTsZgJvkHrrAgsjswfd1efaxuXKkUxmp",
  "key23": "4WTkugHrjE9ZnhgxWN4m9zvepMsYNJ9Ahn86YwzV9xiP21m52tQkhKvYkD9qsHwVbPZDoDBhqvnJWVTFG19bhKM1",
  "key24": "42ZMZgAfy9ZGDcfELjdzokeku13qwMPrTz65eZ257F5rAai8GBEUFMwNGNyh56gaXcSkJ6ruXfgdVUh83QebxJxS",
  "key25": "5E2HGNEMTmY9DT3Hm5r6iqcQnkE46rUiGrdL7gAwr5xK1DHawnhfGjRvixFJVpYWncAeA72poEpB7UrafQ2sT3Ax",
  "key26": "2VGrqcrZfsAaGAMbdcWqEHawUFYj8i831qJSXse3o83ig8CB9KRW8SvFg5zLNDZXSfvVL58mouqK3GzTEZQZPi8B",
  "key27": "jyP19JNHEQMvrvziifVoxa4kb6nG7LxRThVPj3n8y5QXzza7cRho1y2jzKPLwWBG73RPewP4ee44xTAofbU8mTt",
  "key28": "2yfyfSe5A41kq58g3RpVc83yn3MEyf6sXYhXT6QWSdzxPXXmonRRgfaB5y7dhTGym2mLp39G6SJvHJ22dJ5Jwb2Y",
  "key29": "5SA8ECPbCdd5gGmYH6ifLQZcqFY3WEFFcqFD44ZxtVU9NdN19DBEzkmVTEASeM8cZyEMDXHexwdiRwkW4p2mkNHY",
  "key30": "Z4ySiFPKiCcjMpdXrwNpjkrTMeWRmSaxB7Xuw2c3sPbpaAYqisApqyXnqSJJQHqKMx9vQiivE7owvbLV56m8i1S",
  "key31": "3siR3hugKcm8STHNc29S5iyUtjMTegaApSd34JC2YLVe8zPMqrGab7j4mGCXP9ehzKqH5voJPfB1nVam7Sas18mp",
  "key32": "3vrw1FYRT1XnQDHikJWY7hbaY2v7ndSD2X5uSmtwH7LXtvhPC86hpPiPwu6TBDUkqT4XfEAjdrRr1fo4nYuJZQbw"
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
