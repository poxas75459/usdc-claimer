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
    "3UP58GCFg86ZbbmjVPw9ow3rTbJGJNfNUCNH49wzvRY8gKZH7Kj119SNsiF93BheY1JozaoeyDszb1h8ug65YkR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gkbxEQNnrTTruJBAc1MgriivcTYxZFa3GqEYVEVx5Vfaw4gNw17wEUq4QaLwbGfLUNeyWAyRUtNNsWkgVWbsFTH",
  "key1": "2qfNTZrqSyVSu5TsG7oNiivajw3CcMxTE9JHHRPWZvGZqqFrzGvrbbFeKfduQQp9sGAE9s88PVXdZHHvg6QmLwvQ",
  "key2": "4Wmizypc1u9FH73mRGhAK9H8NCnSSVVimtfrYsCdM2moe44tYnBb9TMdx8DQP4WMwHpnEvDgcnkNRwY6xtG7tsAn",
  "key3": "2XCguUCmBzEtFEe6R5gCFKHWc2auQvGUmWaYwqT5WZuvbSuamd3Nw2wEWbLGhC2LfTWJZNd3noa22Mwq2PZvLpLm",
  "key4": "37eAgJbMBVWyeZwCTjWuqvqeSuYHbEAXrdK1xVUaRHtdx9qTFNXXnJAJbAws83M72XYagjTUnVfvoNojeuAyszFd",
  "key5": "5CCxLvPfMGHSGQwXByqGM3DhgEAELxR7aJvAqbzruDna3Ue88eZAj5d74PWCAYMinQVymXwaR1ZEoNxX1mBfXeEc",
  "key6": "5vNNDWuVEwY41RARjsbkM5gZBvJtMss87F2icuQokLpHaGof5uM3FKhB3e6qTKwxtiVxvkhy1tyinXHfUDxjxMwe",
  "key7": "5MxPdftbnsUQnwSNM67JcR5ohgdgvA6wUUrYpweNmWiZZXN5J11WMHo9hQf4XAUwgLrPds8y1DcbksPuL569c9c",
  "key8": "66sFPv3kgk7wjhfBkornd3MemBoKyqJWSaunQQs6nfWr9nz6fL7X9zhfrKhZxT24MFTvjEi37uikQT4YsDcNytMy",
  "key9": "4DhBEmxUqyBDh6AknRsPJQxXchQm3bgo9oEMVhBUn8p56KeixJs3Aa8Qkm8m8cU8PjL8yDFWSn3gKwpKdcGzTSe6",
  "key10": "4SH6y4JQE9yp1C5Nh7J4vRiUu4zmEbruKZBSNGQ2TSo2rimgny5i4J6HYJFyR6moZjoFzUgLvrknXdjezTTFH1SF",
  "key11": "4bMefmp9kgVsq388UZEqTiYVcUA4YPPdqbUefDGxXWmJYjYk7ydn6Uc1kXbxVtpwGBaJj9oTbg3oYzdBtQrvewGL",
  "key12": "49QJCp1AJhawDdA77irp21K5ojgKpaFFW3rdgNe23YZ9pT7bbYjobx8GvDyXoRLMh7r4srRFyHZJKrXrJoEzMbWs",
  "key13": "2g6a53NjnJVFDEFZFWDcpwizxNtMZsiDixq1SbxBWvK8YnJP9ca7jJVBpUVHjKMZRmR23V63atJpAG9uPGZxbST9",
  "key14": "21MhZ5VWnznsgsrXocuWkSCfZ5Z1x1tpxGHMM1Z1vJvrhqcTZqYfUaGr6HwMYPSvC7ACQyMgQnyYJqmnmHqhpNLZ",
  "key15": "32jQa9FRJxcHycENyUXwa7rfStWVavrBWjhtP7m4uyCHarUniXESUBYWqz2CkNGYXJa5yhtjYsrkcMyDFR6QYGSC",
  "key16": "3zpbjyv8Z4ybvyrpiCLS5G84grGm2jEzkhEfnxZZmNUBwQuwuLv6tTS8sgNUEaqnkyDY5Fjb2Xjhby9mKoKBupeh",
  "key17": "4mbPjm5QRWh8igdZfFAhmpuBujbmCBnubNhAsTpsjGDDBuorVfPdXML5mNFtd74v9Ub65QFwa2Xa2RfmXjkRW9js",
  "key18": "5Kvq4s1HY52DmSBeDzDE3W6HBZdV8QK4BznZGzM9rzoJ9JieoKJxDLYyphPMeqx7ydtKQPLwLa1QY1XAmvGirGFz",
  "key19": "2mLYjFH2yCNtttKXJtP63M1VfPVpvmQZp3N8SMsmqV6bU6bhATtUoRzTGgxghHHsvfgKKKrJ37AaJSY9ihj6pSqC",
  "key20": "3jFu1cXZM9viVkJTmNJQkcPsKZ8GmzY3nfkeJd5gKkDK9Aibt1jvQTuKoXsL3pM3MXAwSQhtnaNauvNhFWiHsKiZ",
  "key21": "5HpxVc8irJHCe6N19prypugakrNvtS1fwRmpJQWEekiMhh7ddqUwSf7UKugn8qcHmdHtReL74fPgNdrnV4a2zPvC",
  "key22": "5ShR9jByQxy4tbhEuvC3HfB7daQ1WfdZGJhjGWUNuedRz7Nx5YjDohp15kur5L7ksfRbFjsufXZxZec4cYogthc2",
  "key23": "3xQGsLRgzAeGuLV4B3C1DsKNEMxCTQdvkQJ1fJ2GT1GefZVgVYXt6okDGUQofochZAJqpwUizeAwMkwpKm6fPpH",
  "key24": "5KEj47Nr6fwS9h5tk29cLvrnKSHhM16FvCBbCjvpTXUNfyLzgQFG519qw1Ey9q87SoiW5nVyEN2LKWaqGUQiFwvK",
  "key25": "5Jrm4rBxCGSLSd7X9gpcWSDo8NHpN6qLqhjKmewYB8Wj4kuPRZw9T8BLd9PkdFvd4Lge9XVJfS3NoGvfa17kPdzm",
  "key26": "3PJScFy7jHrEcoLxmMWknwD8oYgnmmupirCquzAUxaASH1K6ezewmuoQ569BnRZqzkdkKPTbanreAeSJytdc8ax9",
  "key27": "xPPuqcetgdvB6K3YiViUWGqW1Q2nMNd9yMPLeD4ztEdcPXGGUmL5W2C2F6QBtf2Jim1LqTi9gL4b9L3u8Xg8AcP",
  "key28": "3VaxGPCdcyBUpB7vLw4KPMDtnoF2Avef6JKxXS6xV6RCwSF3QMV8JxpfVZc7Wfd5hyiwdnwFb76mp4j6iDUDUyz6",
  "key29": "3rS1DRZWAhDe1NEV9KjXEoYX7qpP3AgaV7XC7dGbg6ShxXYPrYn9zt2RJX2Wji3HGkyFnRuwvP21NPCqXjnfEwHb",
  "key30": "4iZCpMy1ZdLsngnFBeoZyCiXFHdUjk2AJCE5rgSjPoEhmrez7cXctt77973v1K6ZTd5sMz8qpusLUT7GsRsJ3Y2v"
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
