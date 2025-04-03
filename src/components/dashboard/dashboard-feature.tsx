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
    "2zzDnJphreEBz3DALHTwe7u1xVxrQuzDbsFP8mBzLtLYxxp2wtS2rwk9XrrrwGUhrxfea97YUK9kFzvHCy3Sud8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n6Mjgw738AYtxPwZs7bJAJkz9sKVLgfEiuJ7JepvZSzY2mDGBVgbcdooq3hzqrxVSWWxQeyDQ1aDFHizWtAeSXK",
  "key1": "kV2YQrBr1Y8bfQLd3ocHB7qc7PdMhAFjGCb325HGVsT8fiptgyKPyCCjWMCzzm1L9eDSscCPb6BspQSs8Ehq2vo",
  "key2": "3LLdAF3MGQ4kaNMJLLpMAe3e6xTMXWkKpLDJ32fJy6FRyyMUbiU48hY5ZsdhsWFponD39qHWi8e4aw4ghuT5mckf",
  "key3": "5SehtgExpbzTFnKQqJtLTWAr6As2ahbja7YHrFPSseyYaesWjhz7YsB4kqDf9ZNrkiAC38ePLBRSVyftpEQcy5qL",
  "key4": "3J1DXjhpWazZNexcraRhnU1QGNTs8BMin5C3tW48dqua5Zm6Tih2xgC6vED26gVyuoLbAZDnuDHqZ6tEMvHkfiwg",
  "key5": "5kCSQKAYLLiFgbRfBYosLxYzrR94BhRcjgyRijG7ZSxT6mnLRXatDyrQh1QNbaYdk38RkqFMgeRMwY5A7WsAuu25",
  "key6": "3awX6uHgnnVUexM7Zexi4JScyCbDkcwpifmAZhXfQ8jH8AQAwp71i4YeKFVN8NZMrWiL7oSe9FPH1yzpQZJLxayC",
  "key7": "2z5piUFHXfNQ7WpNxon4zbri1tNchZswfgjvb3M7hp5po1h1JVZpKep8ZZ9cUz11GC6A34W5vCeabJQZP8TKte4Z",
  "key8": "rgDzjRiZipNwviKW1SePARyqf3q2J5EG73K1D59bzgSogjoBq83Qa88Le97fD5o72KekP4G6doWeqC6UWQxkztJ",
  "key9": "EHMBaEEWSAqdUFfVS2tsSuNK2aFDP7NikbqTkdmoEHTRWGrtYwqxEzoRRNfnMnii8btPFy9TYqtA9c8ND5A7N69",
  "key10": "s7xXzNWj1i252EpfVGDJz3oQxTuHxfn5FfejG4JJir69FmEkak9SbHWGwprd6WGSgSzr9HiQS2wAjL2T3tzJyFQ",
  "key11": "2J8AZa9VPaT3aRRapcVNGWWc2NWRCjzXh3kLsM4iU9EWUv9MUnoGvKYxwVftE5W7JXwKYjuT72WhQYLfohQ9fnjj",
  "key12": "2AkZqoAVn9AatyDS6HapFiqUNjAmTxywucFZbcnRQnwZCeBF5S2brvNSBN17zVtpV1BoYXsMkq9RYz1u4YTyCj3q",
  "key13": "41TjWDhmEpPaE1uLmMAgdvD1t8NKWVzCMg56BPQNHWppsQYATUvweN4Lmo8SUe1RwMGTPUkiMirSTwn5nNCM9Rx4",
  "key14": "2S1No4vCkDaHYeV3pyd7zD57wHuWvHFR9JGB9HxjJDuiuuJNZQLQdSsJ7c6AXbsfaKeL7H2uG9SzAP6PF4V84tfX",
  "key15": "cR1ZpwNwpTFKb5qGLA6zLrxmLUK3dDJPLm2tTzjm1oufENajvkkYnYpAKF598K4iqbN48Te4T5PLhrM5cSURgE8",
  "key16": "3z4CmWpgy6Lpj1mvNgYaA8gTLBwDRDBWuLHEDWkEJnja8WvFM9JrTT9rhbPa9RqDw5dtYsKAezDrPSg6LfsM1mc7",
  "key17": "3GPTwxJR6kEinR8izCwK3JjAuvNTvUrCb3ft6tFgVS2xV29f83PXZVvgcdT9myZywVCDDvAyNJ5frdmcqZCEY66M",
  "key18": "4qDhPkBDpgrLhxB5ciiRg8rzycTY8hr6vayp97zZQwYgBtR9fpvULqTt63fohKS7xaZMyvjqe6jQRUFER2GsgPqM",
  "key19": "33ZgBYi3h6HdUNiMioMK4Bik7NP6Ly26urdNcBgxNiNWra8xec8mPrCQ6PbSXfudS5f9LmqaxL8V5NLhEMf4uzsJ",
  "key20": "HCxCBFn3bby3j49PV2BS4HaVdQzcHE5vGXW5fLhEjSodpe2j7jT4tdxjoXvivMvzr4paezCHhYKzh5UHYuayc9u",
  "key21": "CG9WzYa9ZabUWqVSaxstjYSfN3u6EguoWc7UnNJAYzLMvL5UEqxTXEWSHEL4jVCshdmfSGYCSx6Rdc2c5D3aexg",
  "key22": "FmS7TmsMR7LWzA1hiJ1B93D96arFDSsApAB4ZoKgjP3XQwTYPpeEp5HQ2riNkeic4gkXxvPqyhb5kXurha8UQEa",
  "key23": "5besxd5k9xeqETb6yMMCeCyWhzcNMwhuTaVeKyMBvhZFFpTxbUbAdK7Np7oqmZiXUrd5r6PcEsuipwSiUuABCWHj",
  "key24": "37Xex9kwZFTpa3mK6qTcrmXfozuUXoU4GwpLSZ8jnURoQMZyqGwxsikQUfA7YxJW5cwYG2KADPZDczkqvSQPGuvi",
  "key25": "63oMvNkDhU4or7TXgBes4P693C9PG3E5iwnoHrZkdePG81LUUKtgBUztHT7xqU8j4FwgDpog3G4kw6SELXXEzREg",
  "key26": "56djcMkkB7LFDPJST683y6uNV3Cu2NgeAJqvm2BeGRfEDndHWyRynU59mL75tDTP7JWRLbndsEP4gPVExRyr7aZY",
  "key27": "PDntuDKtUCXqjD53TxSHuBwhMURLJDmvGrQk6YmGM9JsT1h9eUQmzpaWMfQKJCXimk6197Dk7ejDUVRmXLiqafd",
  "key28": "Tt4uPhBbrhrMTHd8FKZNRAAEwrRqb4WdB9FLXuUyuzms7v9Ya74xQssMuu4DiBQmexapS14W6RYM3orrRgHCToq",
  "key29": "3kRQSvozV2HdiVHb4rvqGfBZfTEXGfNWEwasj1HHPxiWoxkRAzZhHPFcmRzAyHAcD3oiBAKahWFtqhyi67PbRPrD"
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
