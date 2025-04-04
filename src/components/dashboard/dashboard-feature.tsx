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
    "3HGqV7HHzcgGVzTJiBNrQqSqHoqrisDWifEqg1y2YVa5ufbJ51grpXZP7vxkWGQYpXcdNJkE7p8uZAePcBRkPV4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WcEVc2HTnAJEVdADXSDigVjSNbTXfv56k55vC795QsqGFANoy37BPNvgP4rYuw2qu19W1NsC3c2adBmFriCQuUt",
  "key1": "5NdhcA7R6hSjPA5X8UivMZe8rq4xJPbZTimviNTN4yRAT9CdsZCP5TEY8kyHiku1PcJsSZ3HnJesT6itENWwSTPw",
  "key2": "2eeY9ZsTQRZ2DFbeUEPqWptXrdDrZxdTomC7NJiSmcavNgcDtgNwsirmfLuWNf5Rc4T9LkDnsPZwtCptASezvvin",
  "key3": "5yYZsggVWx8SRS38274eHD3YJkgmi3mf4LwM4mo8mwQAMRkiBWAiMBHhiD1KifoPDVK57RWy2kmFuCatffMiXd8n",
  "key4": "bvWUqkGwykTFxnRP8uU9coS76djcTaYHd54mNFiHUZm4kpgBAyYiPUXMgvgWmNzrgFKmyTm3F1kQ4T6zwE2zCXY",
  "key5": "2DQ9KS9ys61SaNwASPLjmtYEasw3RisSQ6CeAAp6YP85N9y9NMPpUmuLULjSDiMqPVqZYcB6hsLDa69ZYMpvhemm",
  "key6": "5bXwsHvgzr8mHzNi2Rv33eNxkF3E822wftRXszhPMEcCuB5z2C8KBNeG1RAfpLo936Yait7W8Gyi3QsjezrBvaAt",
  "key7": "3kFxyMycvJKxBcXk6jy7RiCTYRLHYw7Xfv93WDFeyn8o5ieuW8njCm7ExJx3vMD4unZHaWYRhhDek5PogQ1oyyX",
  "key8": "5wGMntpmkN1Hi5xjdoRv2rykn68QVrqbdtdoBRkpiE7hSTyvejk4tN94tfq7RtJrMRKihrVVwkZBPN5iByCnUoeC",
  "key9": "5b78zpaK1ZDu5HPQSQWo5gqWVfRUqVa3tmjCdwhvmWCUS712TNJKHAGFFV63TWT9JgVFjS7An9qXV5Xo5hHeGQB3",
  "key10": "4y54scXGgr2PtR1hRGvgfxUqTAGvGJaGT9EESpyi1LLP8ma1gWdsVSquB1ybNVwJqJprwFcTFmiNzcbq3an2sGbH",
  "key11": "2YfgqT1yUyjYsdp1xzVrZbyCxXBtAosss1eQq9GeYBEJwpyoPsaLFJZojYWXtK8iWqShRas1BcD3mkLQJtLTbgGk",
  "key12": "34SzPFFWzhWRq4pRxetTh2aeMLXHjWtWA8ZaiFbk4gNobwuZ1X61V2Wa9ah1qSPjtxQwjYuRfZjDNkUfvpjcBji",
  "key13": "1LKyttpHepTuGaQdY1m6xAf2oaX62TXfDaxowA9G9Fc4nZvPEL4YFM7ihgT2Xf8TH1WJTtSr9kCDdkb4aKzu3FS",
  "key14": "21oKfQxvcXU7bsJxDbtEu4QUoG6b3ATEkx3JYW8XRcany5kRMXtrdoAF7Gw6ZaJ7phGfNiN83icVWXuQPia4HhNg",
  "key15": "3ecb34QB1uC1CNZmfHUTkB2xYnBYqvKcvu9mXim4bsKzn9csjWZG1tkbxxPeccKadCrd68ZobkvffY94XF35MCoP",
  "key16": "2yfTfQAwYMGyAzEaXqrP9qynSUAYobBGwRd4ncZ3dKH5ZRu4wZ7LTs86SrLg5rrqtZ4ChazXigPzkr2y6y6HAuV2",
  "key17": "41qqUn91nMEpKyDWxDoV3gW2wJb2hEAbjyW4iBrK2doCRbmBpE8agMu7Yirdy4TtJyDYhW9RsTrVZdJa2q6oVjof",
  "key18": "c19koMHd6NPfhEc8Nb7svPLUR3w1bFU8hjCSbKhby8Z5RT6CH59uLFHAKFiJQoJRW3VsPQ8R488w1TCreLWsJef",
  "key19": "3iH8tL8Tvgq6JNTGjAvuGJAxp9BkyTydivasTqs4JhyeBCDQNApKwYHo2rf8qpnV9qP3Q2eA7Vg4szz5meSkn9HJ",
  "key20": "63C871FEC31x8veAbpNHSeNMedtNsxxa6ra5hPnfRL6Mmk6nF9RmdLwkCAWEW5kmCStPdmsPBH1QZzgZSBbUmwFU",
  "key21": "3zJoaowAo3LkVeisCmSceuqqQxXYp2mu49WRo3Nz2tbpPWnNsnCuS6eYSwL9GCM2CXWrFh3zD9Aw81fAYXVJyxf9",
  "key22": "3FBmGHZbStzm8MhgXF6gkkFdNJ8ppVYjhnHJL7d13cHSJ2mpu6DpbmSouAo87Ja857xRKCnuivRpwYoomPHwyCwe",
  "key23": "3TBTThHXAX21Zms4BZYswEUWUR2rBsoczes4FBUsEBoQVkj1CQgxJZbCStkQBR82W8eyGHp8kDSsPD7oJbCoM3Yr",
  "key24": "up9D7oBH6uUuWYJ8YtEu1X4TP94wZAvHniRZF9tPfEtDHSmfV31zx2iJ1HM7eQQPrJjnQU6PzQd999ttxD7P5gC",
  "key25": "CbHPD6qgwGwt6DmXPbnQKq1wy1i55cMYAE53zUVU6uKxgmMpoafhsRWBkKJLu6ySsgGZTm2BexMEWo6Ff6nHRv8",
  "key26": "5LDth6781qNu6sSSH6eZ8WiKTTGAEYe8vioydzQUzS9TvVLg59p2cMCRQCE4w6gyfFvxPsRP2pzg2yZzZBsVRipV",
  "key27": "3h3NxgoutXiQQC4236hn5KHsXhHpfZmK6cv2dRFWRMXb5Yo3yLeVUbQUf6zTWofa9zsqs91N9detbjx8NwCdvsLT"
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
