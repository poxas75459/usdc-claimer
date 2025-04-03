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
    "5FYEgpHgqWttkC28xo3KGRAxkCL48f6Gk8Wsv2ktxQMFuRyCF6J76KnP2LmmEcLmoU8rshbUynPg2TwjSoyF1xq2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A2XMpikZDQeSt8tDv9BQBsvkHXx6RvKYf4e4JVGSA7X59d3REh438vayMUqjyav5yN8uBUu7iqBayg2SnbaRPjG",
  "key1": "2aqM4hTSvxBeoxVtBZT52JWGQUbRWmwASEdBwzaKAveL36RuKg3L92PdfavcEmpdrw5nhrW7FG2jjdH9nMkR3fpq",
  "key2": "5xmhGzaqg87RH8BnubTVb6mfun5T5fuAy1AegPxaTy22p7QiXWgSjT1HFSHM4FKzXjNJ7qGGKAZ7UpgkWxYQURVa",
  "key3": "3vNbWHwoXm3s1Vce3yw48fLRxU7WsNmCyicJmYY2zjjQoZMo1MVcWKyGNv4NtGBpn3RvrSHGpE3srnftxfVZ88sq",
  "key4": "4awuWJ3D8QsJ8RuVmvEEsB79pw8kD5LFSFJZYWGv9e7vPnhX1o2JyBxME11p34d3EXi6VzuaUX7pLu982M4MYxyN",
  "key5": "45yEygYCnhPhd37uhWkiKYU65aLJJtZq14p3sFprA2v1QpxVw1PZ9dUrhyMmB2uiW1ToeTMXikMi6fLGR315afyU",
  "key6": "3owbPjQjN5iWwp9uVBj2qzd28u8rVmqSMBn7phoLGWCHtMzbLoRZuvNomATufEp9S9HgNWxTXXrBfuGFmL2EReiG",
  "key7": "4YmxaAHM2gjUwycfWwfbYAgcUeu5iZghHnUkPV56bJd9QB45V7HYa4w28j4GBGY5EtjLXP11V1ZRikLUSrDeJmvu",
  "key8": "5C6CdMHMUvKeywosW5p9xxzQkGBUtDCwFbWbNhZrQeaeSoo1M9qaFnL2LvcstzxE42d4XHgGUqFM7GEZtYD1Uem4",
  "key9": "VLhj1omgZnGqYD2VhbKHattD78VbFmytHbivu9VxjZsKCgEmkDBgvufM6M6VU4F451eUwMDEzQDKFK6fZGDe1Kj",
  "key10": "PtJE8vKDewgfHy81yuAw2ef9PUdReCfdjCCj5c8Nwb49QQd6e3qzfFPbLA1QMT1Tb1ZRSZXoQ6JDDWyTDGc2bVx",
  "key11": "2u58M6Fmn5jimpG7xN2m3SV7EDX4C5WjRLYtnoYTGFggHH35ynC6b1DpSWzaC7j2n7jFS1hAeQ8LkC3HFbsDJ8Nv",
  "key12": "2xdcN3cdD4uoCdH4FKDVnCDL96Ng8oQ35qAAr6PC6eoM53yuf98AThXLE8u1wKmeW2ZdbVseTahWbZSk3CUbrq4r",
  "key13": "ao2eqG85ZeU7sKU5evDYcxkTHSFuu2AHF1mgq6T7Jqhjp81pg2MszGpwr2XaSV6oi5tTLs5JT3D7t9XJhjdkH5Q",
  "key14": "4Pi4dFkCxMxszt86GSxDLKnjAadUygP9cCKqv1WKVGKwAAQkfcRkGVxRkxZUVTRZvxqTkqBQKYFQDn11P4LuQQb",
  "key15": "3jusNsrtcosCd4Grm9NGffcuxzkcc1XMdYCboTDp6YXGvN9HzSSNGZQHcyLNj86NP1gvdgW1okojWeCTG1xWBQau",
  "key16": "2gMYu8S3Ehcoh3K7f6UVRsqb8ZuZtSFA37yvuH2nKzK4aCnkqTTGwXS7haK4dZ6f873LEmzCCV41wchhceNAmgFg",
  "key17": "4QG9tAPmvdsLp6pgeiymmxDYLtcXbbFkt1S4Nuas86VhpzH5owvJuHJtQxgECbTR9aXECgu8jcnfUG5XFax7mdkQ",
  "key18": "4Po52XMfRc3Jd37CN6w2ADyZowpZx3iFx5pXZjtnera8MqVrzpV1nTQpL6rQ4SkErHnKTUFSgFMi3VNXN8hew9ht",
  "key19": "4nTe2d13sfM2qKgABsLY5zcpiQUUgrKrdyJW7zkFzk6zhkwcdKzULvoiVKdrVZYy7D15oPrd9kcATW6rDsqe76Ni",
  "key20": "4grV4cU22A2dDiPQR21iCjm2fq8xcQtJzZisi8VtDEsK4VTZ7WAmqqjtDLFJk1HN2ecQVfi6RmRUVYGeUthchCvY",
  "key21": "5ajFw5y5hJBD5zZaq1LKe4P5meLA2ErUaMZiYNkSRqjuYzt4Rp28gxWMk48hMMX9D57nK2K5wHWXKzosUMkiFDfg",
  "key22": "2vRq3KmFqTn5kVjQYmgDu1NgR9CWDhARJBVQ94tgsjnKw9gJmCMhvFa31mJuxQ5NCfpDYZZ3zeySC67hgr5XZrvH",
  "key23": "26EsNA1N4bx7BtbvFNePLGv2qMDBhzzu5iJWkfdZT58Zr5Y2niXagndWquAt89FZqTS83KX4aj6Y2DwBd9LpZ1ty",
  "key24": "45jAvmTVhDowMACKJAR5ZZ2yCnc1jPKoJ1QqkB1KNDuPTaVkNLpPNFuTZeJFvigHu37xrH7tT1J88uRPKFrDkeV2",
  "key25": "5PZDXJ86SRkQsY1xfjEwPiWgdBiHgKuTmpxPuysMAyXUVnF8fXDa6beuiinHMYFe95BHEAUPxu5kY88FqW1HsbgJ",
  "key26": "gujcLBU61krLfLADi74tMEmCKP7worYXGmiaSaqHHKSjUsnGYuEykVGP6gwJi9Fbmaoo7iusop38TaNfNgrC6Dn"
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
