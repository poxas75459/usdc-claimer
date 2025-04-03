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
    "uSSFUmEapAYh7Epb5zkKnktxRV7TTouwthCwXP8YRsyh7T9MYW2WLJKSws7NxWeYceden43qbPdYXPScBJ2pFo4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qEX6XzA5k9Yi8txoKEEu3vdKkE5qA6zF1UyzHDf8fgdwxBVk259rTr2bATkrmL3se8QdUyUpFi6qSMuYr2Dkdx9",
  "key1": "4tVJC9b9GM3MpDFSserfsGVCcERqKYbE5XHTEZ3wCBaJTjmS5gKCzvHXAuj84ZnAxNyQZjoW4VqBmoaqD3aCBV7p",
  "key2": "3sbAyJdTf6bE4is4kMgw1VPp9gneKzXXU9uiUX6QRFjJtMx3qYqtv8nrK7uPUJ2wHmaob3GGDG8MYDoqSEmQ3Kwf",
  "key3": "42TJrnxBc5YsY1mqEFj3JL7k8deQ22WxV8v4cyAn6i625hcp5JQeMyiAdXniZ2hJinjhZaxxDouUygpRVwUpvpjA",
  "key4": "3ytSTBrtkcKrBo4fe1wtd8qFbSLDFyvJLedpXkNTr6uH5seEerWbDwh6YNZWjXbqaDJ72sTehiFaJnWrNrCs1oJC",
  "key5": "5KBeRX8SCqKPQ5kaB7NPF61Qiq74GV8PPxfdD2KhHJXMmJSXkDheXRxA9z48rHzg32XevNZ7pzfL8gkyuC2TZ3dx",
  "key6": "5WXhRpVZ8RfBVarTegYA3Nzy8YAZoCJnnPZjnavVWdoPa4kNDFRGd6kEFcPCRVWirNivdxqSPzmxCJcTRyU2iAzL",
  "key7": "3G6V21B4JEyq4bJ93b4EUz2AVsvb943fxNRuAkEm3GMRoPoDvaJw81yjfKsX5k13idvaAPxavd9quhGQUAjVr86M",
  "key8": "5yC1mnVco1hHrPrraAT3JoXjXk1xFkNkEJWahGDegCoqzY7DGXTeLRJFN4qzj2eUGVt51WucksddzbL5hiC5J6bw",
  "key9": "2M1Wqi1pvLhs3PxPH2FiAXHqYXjgdFbDRfVPwJDMzSGjydEihBdx7FZZhWBGnUz9eWFqtd3dJoAkN7GqS9MbbDEG",
  "key10": "4FUR6UzUf8YESscjwjLbpcojoUKYb6195icKdvYTcn7KJi1k32nEm3yc44bbhANcQE81JJHwydKePURqWzWVVsXD",
  "key11": "4BSqcYdeZH3GkJ5QRbMF8ALvFhAVsEfgFVnQqWZR4PN1zMcP1gbuJK1icSkX4xaHTyzchS1DmW9JS5vqiX8gNmet",
  "key12": "2i8CogvSzXAtirLFHbS5CWpnkijUPUSfRkWxQuZ2Ub81qHkHTDqimvq5nGeTtUXrVmC8Vmpd8mYJZMaG1Gv4wvLu",
  "key13": "2LpYEWJEPNAmDRqiGCJPfCuBikUsc9FzZxKeifHh7PwTCzjTfcrLA52aZ6wdUSn2VxbyVkCPiU87J52Qw9Ko7Eig",
  "key14": "3AEUaQSWLLhr9YeVNPaFXW7u2Tznh2a6NEcCtffLjwuU6QePbDQGw9GFuSJ6AayQbNUTgmfdgf7LeGDMRb36hzC6",
  "key15": "4WDWhFuf3m6jTzC1qjdJMsxyMGunFDvPPge3VDmw4k8ykv7b3eC8aTCxrVWSvabSw6ZuGZWZZ5AUDJDE9U2vgV2N",
  "key16": "5iQyWazLeLXahKiM5dmD7smzKpKasdB6A4bK3nRBivoeWj3XnuuoYb6Q4DLwrngHjEN5eJGrHK8cUx2cms2LkUeL",
  "key17": "4FnNzDPe2yW9KphCvDUTuK4Bn2M3zRjBkSGZSHHnMceE1P5L2HfA7kaNzjiVYmMF7yG8FscYUiVWbt6V5gScXABS",
  "key18": "K7H9QFuWGayEsyFyznnQzm1drVFoNbnceSPGNru78JQXKB2s2jgurN9NkoLkfyMoZV2ZSXXYCsK2RLNr6GX37TK",
  "key19": "3bcNzU2fmxujwMoNcfgGApJvqZVK1H55ztL6mFLMbGHLvcA1Gcf5jANeF3YJRGi77zEnFgXSpwndVTvZjGohPrUN",
  "key20": "2DBzMAFrka8R1kpjwtjgpLkN3FFPjzNUBBCsBEMzLNdfkHKN5WHx42hFZzyXys5odKkXuNQcmTjZBvinsvSpJQes",
  "key21": "CmZ5nFCpQ8xJmCScuLyHDmhreNVpRfvMVFuMqB4wBi3b1XA8QYLnVynuXoSN4fL4xoV21ecazQkL7BbS9mbFXBF",
  "key22": "tEneAtUk3R58Ve25e8eS2FWymgGWB8M2DwqyHF9yogGetjfFnc7oLvikDosh2tJTe1CU9x1FXzi2G3gHeT8Edty",
  "key23": "3bxSCHufFPwMupfeBxpiFjXUa6bc9ecQJQ5PUc3uzzmGr2EzfJMjPJuzAWTVb4ygg5T97Kkup8yFe4HfTkTnzvLx",
  "key24": "59cfzfSLrg11HYLCo41QR7MrmRwLdPC6paqjG5dEgjZmtQWxbGwMczSE32vzqariqocbUAqQKTD7zUqswUbdMdsw",
  "key25": "2HqWreWWEGdYBLwFS2p1qexkcHa1bavGpHaf8UpTCdbqFWoqFT96erxMQPMeSKyyDRQvbPHvWj1hmMzNmDh4NVBf",
  "key26": "2kCv6QjEN8abupfnDfwACuk9eG5pGHniNr1sgmWMjL7PZdxKeS3NX6F7aDsQCUPkE44FM51mS45uGGuEx1EarUgM",
  "key27": "3nAWqMW1m8dxReuWBFbXcQjDiLxGkYypoveKw3gtb1s7m55rwNk5FpM95WadoyCaeYNpymAYcjAkzJhkjk6NmmjW"
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
