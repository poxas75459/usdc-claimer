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
    "EhWb816VL7UmtqVaAVLGuebShYCNALxjnJhHon3HnNnDqz9Por934qJsjyb8vvXWYK6jfy8PjN5cwhMoKarFtsg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WFyQNkc1eVgaTTMXr3NjcgcmGH2NotQ19fUnypSkdaniKKDdnzEFS69qET7i8YqMjDRd4cc6gU3hhwowKjEdiPp",
  "key1": "62DZWcPTGYG67Gwn5p81gP9jmCoqaPHGW4RQpGrRzKdSoTgcBeM9jENCDN91iJKPdo8onDiksANr4H7oTzhRxReH",
  "key2": "21TBuX854JMdfVW4Aq1aPwxY7qk6T2i33g1cdkMxUTqdsm3rczJtd3yZM77cFLswpoG3TKYKQf3YV91exxAkCUm2",
  "key3": "23MbFpurjELFwbYCDZnDUKod6iS1uBbQt2qPtG1WyvXreSDduj7PhStez93capZSj5Z4n8UumboEVGrBLsyFRRBk",
  "key4": "3w1SdWVkrHcEYrUsgXpVT7NZgWFvnqjWRMPaapRkpcGvukZUEJM9qfWbVG5ynUwbECxkruBNN6GxXiyAaFZ9uhY8",
  "key5": "4d3u43wnM5bUrkVDdJjAmBrn7XwopXHGu3WP9wT6fcjd44rNLmc4TdyF6SeGuf8QGMkae3tNhDzZiHrYYPTK3PJo",
  "key6": "5TWVApSc1duUeZWTw3ZMVEYtem18jJs9yhsX66tbf27fz3RbfwDDKApqq3tVxDsfLew9PnGdJKrN3M2yDprTKnak",
  "key7": "59TwdsB2dZsjtCBZzFbVZhVSFo9hVBddEcLvq9dkWVhHofHfn3f4PeFgA5NtkRcHQk4vxk835JkW2WrUpu1NMHDK",
  "key8": "3UYH7ujkzw3LNoxFqr41oK7ddHdsuhu5rq9XxGp6VWfdF3P72TZNmaYo8mtfDBtHhFox5Qmy1hZaDZ2vJ1nA3VvK",
  "key9": "26gfcNU4APYpYkbqkvTh5S6De2GYHJz3GL5fYnyt7ddhxmmQ7oLuLXxpGnx1zRfP9uTRLY5tpbQpYy6ckSWKqyCK",
  "key10": "2z8YZTMWkhSSHdKAFuqqkctkVFX9aS9YkRz7iNkDGACT2VDihCcXPNU8vTAWUxhAPxmX77iC2JcwqwgLheWcFHUo",
  "key11": "2cAZPpyGN5cmnGXEi8dCQLzNna98EHbDL9QgeMkJJLxAfHn8uPs72cSSzXTYLxLXiQE4Je7z1aPLcepMUmqaUTBu",
  "key12": "4DFRjmvaR1YZKw4nyjvrrCK8kn8giBDkNRssuSwX9GWzVwNk3nkb4pcmXjxsTqF5C4oW6PTMFv48dJ7UEKvYZCnS",
  "key13": "3tTturF869TWztJvpiFMY2axu8JvFjnDe4ix26spAUedopJGzzqt9SUChidoW6uAuZ2UQmEK88DGvZ48C8ntRDYi",
  "key14": "48mTf3QsbvdeVk3S5s1DRb3Q8N9kLajzkXL5Yj7HTTzPvWvjuwF1s64w8RqpVTejXferjuumQ8VS7meARgpjeAw5",
  "key15": "t9YV4tncnTRSuu88XEBp4Gs4YRkRJd44U8ZBorbmWvcuVyGR85JxrxP1p6e942qt6bCw2whjnneh3vghcLdDZDn",
  "key16": "5FAxdVHakkasLCBaLZCEs9foenak9j82EiHgFK1ywMSQptNV1NF9wjBUnTYm3e8qwNiGK2NHGfWLSLcaYntNZEYz",
  "key17": "3LHssiRQ5JHZcpFbmR2dRXiQty4eNa5ivEgDiVL9SwYJdEmLp3wi7626MhUT6NJ1Wbxuj9jXLUk1MgMN7hx9dtzU",
  "key18": "4qxH3c9wwsjTgRamUoprxbDvwHvnNjjdiTMVVU4m7J6R4MqzzABzBtv6DMbqA52a6uu2yEv2gNwq2RitqqMLMoKs",
  "key19": "348qWrHRoX3DarJLEHgkCJzKsPJzXtFcvqytpmMcPxYKK1LKm7ASzrETAHs7PrVtCjUmxUwGunKZFm2yKB2TZrMU",
  "key20": "4w5Wczzzd9Dy6F5FRZnVbLQNmdHpsmc5LhZ9MiCvGSmj6HuWaaxDLP1XQBrLJ7niKibYh2f3DxrGJdcB1Ados16a",
  "key21": "opWgDCzjyF4vRDxhVFe18ZiQUZ8QnvBRdpaBpPMhE4t6NQh86f7BpF5YDEUTsGNzv22dUk6XPcVMJwTMmCdnjr9",
  "key22": "4ase9sipS7BDmK8zCQB4kEnTvybaXJZbzLYWMKzFymi37BekdyQR3i7j1DVy2DydDYvsRBLCtqFgZ7r1NA1Kp6ZC",
  "key23": "37Tyrvm1ymjSmhGUhj4mrEc2pd7khoSXUXrmW61Fqx9wWnQyNSxGGhCXkBg21BqqVn2vrPJxVFayYf9awd66ch4J",
  "key24": "2d9xQBY6uTAH4DddygQftxsj1b9GJCeP52gRBPCAyMJfgXVVvy68qHTjoSiv6WEVGXE4s33b3groC1LZrF27nfmv",
  "key25": "2bi1fQoHkGiNYkkEDbLGPEJPDqMq6NcAjUUWbzKwfVKd66e2rU2mGEKwgxWFJo6TctEiWc7atiFwm38iUJrPQSHQ",
  "key26": "5jXU79uoybKCsKKu7C1pXQ6sUoLjRdNaM6yHfHTfUdEPbWXsLFApF6A53uKd2RMiZkECbDBWSNo2Y4DEQFcLkprw",
  "key27": "fjtySsumP9feawTgbgkEFnun89hFBHxuoghQv7RQb7vaAp9deLnjhCDc2rE63nr1PiuRx7bZv48EniMN5Bv5eEv",
  "key28": "5154mv2LoxTzd2r5tmitt8SSfcMuhPbJ5aiNoYehyFf1oBUwZzsY3XrKLmoa5mEiqqayt9FB7ou2x2D9aAPFpbvB",
  "key29": "FmW3u6fEBJQzbfgxkgNx9LKxx1UDsaVe3XCu8bjYh9iyCitk279BMu29kGS58Sqg3w4ktkzPjfKvREw93RbzATc",
  "key30": "3F8fhbNVs1wjcuxjwcmJdLTY2U2CT76gg88nTA9j4WG7bRpjNsaYW8VrXY6LjNoaaFrHSiRkt6nUGhibA5z45Qpk"
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
