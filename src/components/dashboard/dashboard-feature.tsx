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
    "5UoapyYqz2V1xbjKZqqFKmQd54SPZFDru5Zu1ukuQKkVWwNj1cw8kzhqTc4PjLX5zfwPUMpAV8qXcUJCFtGxd1e1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BgH9XvDyZhEtomHNtoTFZkSuXxPDjZVEe8MWA7ujBx1EvZQiadRPV8Ri3imyue5ZrzXMJBNVjdCHr936am3squT",
  "key1": "2UaW9rtvkVpSKoWSFLmjWxQcu8YbvYoxeAQNN8WTijB6c4Brf7usxF5t6aQQUM4LuE8w7r4vb2j9jUYd9TNX872Q",
  "key2": "2tX1XnkNcq68JG6wdMdtYeWBb4p5jWH41nj6v1x4MWCEKyiwZJoPV4RRHQP6hWdJwjUA3HcjxMPpN3xA3wyBGTa2",
  "key3": "4KuBN7jDAz8m3fCbdBEmhLABcewALcqRYak5VbiiggdV3j4foxCw4kZaMjjxXUYS1y5AevoBb1gVcm4yGcH7ZjT6",
  "key4": "2KczvEmihW7XmYE9XmhHVhnPkfX9hiv3g8TkUSNLDVZATSUXFUoEcxX7WpvACTt95u8wzevimpy6HZArmEcx7Wkq",
  "key5": "289uQNjGgHSKtVhbN1iUzJcgzbbmBouCzoe5Bn5xvsE9DKuwozVicDFk6CpC2DpT6eeABtmcd4LY4cYvJ4du17hH",
  "key6": "65oHzinLbuDw8UbNgtx9AmnixAYqKryte7BtfmXumA4eKbV2ys3L9BCchMhk3xEnM1vZq5Uz9i9YiK3VxFftC3Tp",
  "key7": "3XdhG571YGj9n5zGd8G7kYDxfHfj1TqKDwNwyfPr1PL1NZv6otfb3fCi5EfaYKtj9LkG7av8Y5vmnsjY9kRoHeYS",
  "key8": "5foHAoQD83tEmZhv89X62oJ5GGtoqPDBEXca6cHtyB1AGmEEaPBEhA1eHFzYfqLkhcBdFGhfhVNngttRNCxEnYgr",
  "key9": "64SYgQJRoMehjTGs8a8iRqY42j1EPY6tMVK8oUV279Kohjc62bWbhPB4iPGxa8p2ETxXCFrW6SQMeb5MC9mhumk7",
  "key10": "5VWyuvSPPCzJBsF8XTNYXx2vNtZsQ2ZEK4HGgyokq7VcDnsBFYdBzUYn6UCZjzPDRgoRn7GWdetXpvbGoYQySnwy",
  "key11": "GxqtfQf8snAPd5WRQbo43CZzVeMtqXaWV9HD7BqBeCvP6UyrYTWRk94gTaWViWSjW8pyvgTRi3nA9HsKS85AdyP",
  "key12": "446mGp91eVjPqhuDTVR4RKaNWepMfnycxuWNAwqvRnw2ojKzsrbfJMogEWbyTtJSrXxUkmDktL8iwYXRPGe8riP1",
  "key13": "32WTf6NHvdoBXPYPoRcFfvkd14p6yQ7oKby4LMN81Ms7YXpeeASHfLvnbjeHwfJVfYABMu6bT15imYdNGfH4Hrr",
  "key14": "4dv7cQHcgLnMwiLXKNwuKyJFzbtuqvDjn6YcBUJZ3meHcss18bLUKxj4qMGMfcmraGrbJQbpX48BBcckndRgex5o",
  "key15": "4aBLLeAsq2mS4BvNWhpRLStEAbf32GgbpCbEx7kFnyC4yUAwxqTPp1CrvCWe6F74AsN9jN9HcxfhFGTfr6K2E9Tp",
  "key16": "vrYkZ5VDZuibekxkZ2CAehqmR99HWa7sNsPg14pUDzKEQQk9P2pJVgXD6WfdYAzugy6no66CSggzkiVFLspSbum",
  "key17": "32eUeZi844RGkxhM6wSpc145WeeUJTeReaPkCuvisZitnJhZrnGsyQspHSU4xh8ZdW9rR7ZXVqQxwmzP8GwQLy23",
  "key18": "dF3Y5XisLisySCwxvAg8zgTa4qAqvLH3JA96XmFdkG51Wf4pfkjLXp5xbqa2rnmaCSwnruVbDeHwghgoq6tBSnY",
  "key19": "pXYbLA4mMLa9H63heg6hdogVxeqNfhXS5URBkyfLF9XcCg9F2Drojn1qNEef59opYYaw4h4MaX75EzVZcChBLcy",
  "key20": "2KzMxVEquYEmWjnYwutVevVG3f1N35pZJiAJX2kNSBsVMdRNZNkLndn1MoePAu78GdmNw2iKkHESaqpdQ1P6bxWu",
  "key21": "5dDbULWqueEY2zxqL8pmWmcrtHS8bfsaHuRKG1gpqQH2vKL6cXfK1SipjVj37GthmdMWqraVFSneQBq3N97WTebG",
  "key22": "4dnHtrYdzRWNpqka3fv8QZFeqQzHCt6ZiycvPSEuCjqSLRSocrNjgmQp87Uqafcv21SsBK44CK6cTAt2id5Dzw8L",
  "key23": "2fdpAk9XAiczTfsc5KKrrx9RWrievde7Kf7NgpXvxJaTSe3fAYhp3i3CZ1duhSJSEJ347ehaKhDETbumwLAuvjaS",
  "key24": "5UJ219pZw9xtt6BRZ2oDkuDEaG8EgmBy6A5DxkPEd1jHc3c81Q4npt6t6KBwTZTwfEck5nP1J5JwAovQSf7CnWdp",
  "key25": "PxSPJUbLCBJWh6ZBe65AWLNJVucyEEMDyyRqwrFTrR2UriwgjBmgYLcaHUhRoGWnnKjaxGSeKCM21bgJhqHVGYR",
  "key26": "MDH7idEE9RXbLhnuvHfrVaPe6N9peTwTZcZq253bTbaHAvUFpQ6WSKWsCFBw5iDuS77YDNGVoX3PySi8KnFyjJr",
  "key27": "5DycGzPQrVFPpjDW3w6d9YxpjQdkJ7vtWX3ovtuV9PyNA4fXkvnQwTXXQV7g7VBPo1zqEyyuhEgAocadoUm8yaUN"
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
