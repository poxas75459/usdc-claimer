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
    "2eu17H2EDzMeZcpZh96zUxJicxa9kmjWs3E87r9Ukn8yjWMvceJoo5rxmMFtwDdpFQWmjZ9Sb5BHhW7sZ8a5nKrS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZPT9qC38UFYNSJ3JjUBNswtbi3ajkf3kriLbf5eTQ3LxShMnxgaLaHBxwwqbV2s1VFHhwBSfACMzroemKAZiwGq",
  "key1": "3RETgZCVTHXoWNUv3S7VEyJbgKsHSYhLASokh4au1CYt76CoZSMn1Ruqde4Fh63ycQ13RjBStBUvGgrnf1pK3b4q",
  "key2": "2huXnsNpQ5frcnDTJkBo7mtqZJoSitZFcjsontyxasqz7g2yCdT6SkL1ERSYXcSZswUeBjLrBwAKM2k4idt1HQGv",
  "key3": "4S3Ep28nj4K5nLGe3h7wQo8jwz7TaQsJWEYCEVPuioiv1KHRbVHrHQ2rUYssH2Wa1m7v6UknGtUeCvwXVLyuhChf",
  "key4": "4rGnMYSHeYHaiPfVp3UrJnbizsArPxs7zMbwDi5y8LjG4CkB2Vh4iVS2D8dNkZDX1pX7vsDoBMNcp2W6QiVCW61A",
  "key5": "DUNfmvjkFNUzEG2Cxcjaz5eTMtsGvHBSe2hgegvLSSWDFmo56h3nxNcgLtjbSng5weir2d1VRdmcoXdmXCbLuvw",
  "key6": "3cqxDUjV19tWTxG2d2FYAGC3peJdErBU86ay2cUyr54pEFaAkb3KdPhxBJ3QcTSZCXJRKuUwWUPJQqxPp21j7ojA",
  "key7": "4Yf8EdesALNTkVFGEvreWoCx3KXqkZZRLy2dxFgrqc96qM1JWgrsiAurUEymCT14FwaX6QywDZHZFp6E68koxxHJ",
  "key8": "5JjRQnfFyrQEywbLBAStBzLsMYGswuhz1ZU63vXebH7f4Z4AqsQD32Gc9qGTjTMaPAzLhdt4RGhfTbGAAQi1D2TC",
  "key9": "3hKPN7o6ZivoQBC24SwBztuZkanFYCFMXYS6kDzf31fFt5gYge8m5jHanoQ6yuRTjwyophd78Nx6iETqYGHCJpgk",
  "key10": "3GtU9ADrtKZ3FjF23E9VoSGudsobj1JmZs2bXEQLAxPUvdxjyUy3Pr7h2oFh3cPTRGJcbgMqc2xz1wVHQnJDu9y",
  "key11": "5kv61U5GeSPvVP2YkbdFwtkt6zjFrwvxenduhway2hFUvezza9Bk6752ypa2Zo3anY5WvrRXgLnZa6f6TcDWx8UF",
  "key12": "5aHLCUERMbvFZjRoQCKn1Xqm6RkTpA98W3vtzHybXzWbVZ87CFLvGscwn668fgeWXP4JM9LQ17oDS5jDiNqC8diW",
  "key13": "67AxBjm55m4Haveiaz5vovFBAyYkV89CC1bx2EGt6UnJUjXE4EDGW7DzTZbpHvhuH6dke2WpP37aeJJksVae2f1z",
  "key14": "5P3E6EqRTwLfmcAvb3cHzx424MK33Xto3zo9Xr7ivHGthRYjX6NLFWgYK3NMGXwN1iA9cbJRuNUbQCSrSn6keu2B",
  "key15": "22Ytob1smhukA5hFagUbfhorsxHQiUHv28G4jkrrXWVNwws2KTLWtB4oNKgWGcK9UVGL8mjApdphwq6q4KsVUf2N",
  "key16": "5gmT3sxKa2FeJKvsVSD7Wv8WpJtbqQZZnzndLhKqJePtAtbyUtDa7nzJZfe5BiEDjWzqtd6Sxr6z1dVxeawGvDBg",
  "key17": "SWfiobWezS9PscUGiWLuzJScTsVDseYEW1eAT7rgCmW4ib5w1exYv4j1kQW4dbP5CAsfYgHfgcBFzEd88McZpsp",
  "key18": "33S7GmzWizaSSL52FsDzS2snxnLcWrennhqEU4p8N412PjkGXxm9GPLayoenMyzHfbCwP8EQFmsjtBpGs1fAB2jT",
  "key19": "KtCBQ1KJnVLLb4p1or6xxbkJ4cgcRebivvBwXuowuATTySy9tJaybneoEdKDzJJmX3xqyo3w8yLydost2QQ7AzY",
  "key20": "XfUf65xZ4ttM1NUDztmoHp9rbG6Fr3SredL7oYS4PicaKp4GGFrUNj3e7YyYGQdWLXfhaTkLgWtYqsJpFFReRUW",
  "key21": "gbkhY4FuwGMsZpHaGeDQQhh2dJAbHckp5aKwwJ1VRxYqNLMBjryjmx2TCyiAWimnEXc3ZdS4drCF1nwzBZUYfXr",
  "key22": "4bi1SLoDNdCxs4Aw2k2jL5hg9WZQvYfzqtAmSmSzeVD7HoE57ejkpJEcKmvmCJEXS6PCB7aWBjjcpAzc25ztGPzv",
  "key23": "2699YDEKyee2rmpwbQMYBfJruukiFd1WK7cRgGdbRctzUDqjNH5VLyzpXbrbSWbExAW81nQHYkFkmSNyfFgM1xVD",
  "key24": "49teA6u7WuHrDwKTUvXYDkN4wTr9Hb9p349xFmbJDVVRioy1sdeMHqdP8RwQEXz7dDvNf2Q6mVLVVcihtxxTmLHK",
  "key25": "29539YzMp9hRhch4qfjUHkV8h2YTycAir52X3nGQGes2goL4TZXWC6WFvC2akmLJxpJ2ePK6ZaU4exk3uo818mtm",
  "key26": "2EyikCuEAb3ZhCv2RZjSofyh23BdtkghU1okqt4LRCvivcqq5Lq4PHdTqvcmAXu1jootAyzi5VhcimEmzCXcJzSU",
  "key27": "4QjAraiDNCVxpgktX23PybCB9uFXxi5hZeHoQkjACVm1cfHw3dRbavyV6JvPdQwLw4n3ewJ7LWgXqxjvNWeFnQc1",
  "key28": "5uyuAJ67yTkDaUUUNFY1DuAuYS2odU2sgVz7kXCfjDiyMbg3D1CJpWzsiHmHZbw5ta4wQGLvicQA8nQDzUAExnvn",
  "key29": "4R8JPioAhL3DtPMoVdsTPyfCK7EmWeMVjUMzEzkkCLukHGf9Mbf3mtm2XnH7ocAEG6nWYT1mKvnsmufNKhLB9P6t",
  "key30": "5zw1YCb6hES3fmEhRE9Rbvyqr2jhEKYBRQSY6yoc1BiK2F7pDJaeEFnSHps4M3mCWGHH9XiKjAaHVvqDKPyQx6DA",
  "key31": "32a1z7dgKNjwhDPpQaEVc2JZK2UwiXwfzWVevvyJbM9oRLA3sZwVWh7z84DaBLYWyHjmzgDgbt5YfH3XwsX7xGCr"
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
