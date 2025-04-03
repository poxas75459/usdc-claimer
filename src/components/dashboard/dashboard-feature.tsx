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
    "3VJ1waX7qXhWLVkzphZEe3dK4YeGxXuPgNTwcnD7jzep5FKPvCr5zQJGNTLGiN25jN3MjCHtXw6saiedYVS5DeuV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31TD2RcpHVaWpfWQcw7BMf59kXcwBWJS7F8Mkjcn4WAHAj2nyw8Mm6hdi6Bbw2UGRWkbGDiCXKrFtTbCY9XdGtZD",
  "key1": "3k31EqPswF2VKUWWobo6Gr7q2stZdcZ7u8a57MkFDhRLRgCqKoepYrptHi6NbMo7kDgjx5pWKSpvXLgjGgY1caM8",
  "key2": "21Z6ekyUjLnQzUvSPFbXQx46owuhZ9zRDGTC8JUF7694CALJNJofgd2SRJujeVDqeHwYTPnRqz7egiRzBHNwAQxd",
  "key3": "2oKtPY1UtJrHGNXZuYJmSRNGBLC5xnNcvNfp2M9QQ3YYzyp9cLSYtUCXNaos8KM96QXSh5GZ6nxaQLnYkN3BTbG3",
  "key4": "pX4Tcykwq7ZPE3tjuzQ86Pu8CPJgPFh4qDDojjxArupzo7BckKUUcZNmdc36mo5XZ4A1hFUw9xSjBjAek9imvyA",
  "key5": "JhsRQGYMCGqbttQRHiUUfJfW3drhJt361jBRWiLu49h4bSKWt6tfs9tS7DsBeFnxFYLFTUc2jnCk5ofFPtqBc6Q",
  "key6": "CkT6DfdxG4e4qmmnADkBFHvacJybNEo4uTMRqRzQhytzFBDW2KP9S2S3ik4n8arCwSGxFbNJgjcABvyy7kjyQxe",
  "key7": "k55Xqw3N3JGqViwvgQgj3bsqXCP6jG1NYMPzrWU1coy1YJZWBZAt3tapPg1MST977STLsdsHUuDjMRP9gyHvhu6",
  "key8": "5966jSNMk7rVjqJEhV3uGeKabtzoxAqn8VoStUzTDShN1QU4YonCo3YMGQm84M1LagfagamHw8S7C7xPTuHwhK48",
  "key9": "4tcYPq6813Ttv9HXJdd35ZRgSFyCLn1LK5imzzUT8cFug4QfFqVG2PWChstxcCgWqiNnDMseRZzfXXvLLEVTHUBz",
  "key10": "5uWZ3oF2yKRtaZaUpUCYjMp2NPHqfddxLmfHL7xRRwEinVnDiG32E29KMWu4q2wmTFUQ3evEArTcwawys6quo3aZ",
  "key11": "3Yz9yaXAA6ZdX7vbX3s5vAubEZTdHdQkyoPjYtHkLNHQpMCXcpfrJnfoh6y5gALxqTzJxbaZamronD97PKgAyKGD",
  "key12": "4my8JW4HLgyschuVD57ySsWmZ8SQHPq3CLEwKQwgpXHTSxvUtNTD1NmNANtfbk9XjWFYD2sV2SPHyj9HKJFACZjq",
  "key13": "2GJWbpY8YxY9PVw4pFToPcrCwvxdNnv2kRLYMAvhXpqxu55oSJ7rM7RuXgdeBpm89KWSpqsa3Qejb5awKGYZqix6",
  "key14": "2Q6fpT27eQSrohzRMhsLUtecDyjdxxvYsxF7oDpwaajyfsY9qkGqWDKNebyArC7g18KhYqtNmid3tAFdQbUe7LAg",
  "key15": "4vH52eZ9px6g2MmzLzYfBQVouononorKkgFQxeoKracDahA5abstC1vwwm7BFjTzJajPjo8AoBXHuHLWaLWz8xgA",
  "key16": "3UFvEHZzQAeukFZ3Sr1BnwKEFKJcUubGLVXNjgQbsmmRzKRRkQ8Q9STtjA4Sv2Uw5295DW8EM1b6Uxubhii9GFQe",
  "key17": "7DPGk7H75fb7ErS9MKuBUQ2T9RP2QYMSrBCfaDSBoBevHECQQStip89ffjo9usTMZ54z2JQiVL9soL5amBQNzpF",
  "key18": "2jC26k7PYwp46MksX45R5cjH2RgzdBkXC9Tc6RynD5ma15DmMZ5NuVub923vySQmfRZPkQLjnGjGeutaK6Sn5SCU",
  "key19": "oEELvtQ9UFK5EFmLphBdZv2itEvHQnXugF7RtEaJ9FBqxWJmvesWL6ZzvTGxZ6GWpFvFSdgSmmbayXdnbYKJUD3",
  "key20": "33vSXq3AAZ7fHLHm5sQYrumMjaXS8s69URiPtK5krYND9shCcPYiot5RuMDEaQgiz6TUAB8EFZfsAU6nrRbJd4HB",
  "key21": "4Pnx5B3BLAe6mxds5KE8JXWfNtgQyeBBM4RwSYpKZuqXNyZFSUGdkyXTMSZCtUyK4umY822W4xipUSYRCFnt7zzm",
  "key22": "4kBGDBzJjkY3JJ3py2CWBh2mu52Nh8gUgdyAyvPixF57dxxYnfyqW1tjhDAA3jdZrVAPsYuPXytmUVP3XrEum8ks",
  "key23": "YcMsiB4rYMuB4YumnJ4tw1vKYczZA4Vvid241KSewXUzMVfvJyZ1CczXxCqhK74Ctpq1ruqvofCHg9QhufDBFgM",
  "key24": "2eWesiqjwwZZ4dwyWG9LJz7GQJ4AA6QSySHuk823B7VytByFSG2Xm3kJck6wfpyCPZGMq9X7gKxpWwawGinSdyCv",
  "key25": "4Lt4N1LX7ymKPuwfqCRxkAdFXBgya5mGTCw777Mg2ZzemVQZZFuEm3mMbo9QcNPrEpAvv4ySuUELFKyiaoAurNWe",
  "key26": "3fM8BNutGBAXAgwDE78p9viqKEnAp7ge5nRLL4qkpc4Fy5xmjAzxeUhqmeXPKFQEVynD7cJs5tYA1rkngNZH7Fku",
  "key27": "567RtvZNR49ssyV8Ag5DXBS3hScQDrmaAXAp2TURwZdL5TA7LAbd5cLNWJ2zXveRiwmzyb83x1zhRUJwuCx7dFJw",
  "key28": "3oSdimZFzTDuW7vGMtSwFvZtcnmuZQyPokBT1qs8N9eVR2CXBLLsCRZKfHyG9AZJ1aSHqemsc1UCGjUZf5ygZAff",
  "key29": "oThB3PbYmkGiZZehDbpnSnPEupw1Z1LymjYZdpVjnrAGxb19RNj3smAbSdUBSuzSA4EesoANjd7nGm3PKXMzimo",
  "key30": "uY4Gm3DZ3eov3DdMmwSgBSg1vwjLQFchmD4iu4RtGkrSZfEPUfSpiS3focsmndjA36Pd1PTZowrzAJWu8Ycmicb",
  "key31": "43dmDZ2xnfaZPjxtXHh8dffg4YvtCaT2Jx1VUtPz4VT9BsFn5h4Wtz8cB226tTdLkLuZ9bdXUKqfta8uX1puHGug",
  "key32": "3B5mGyGjPiiQFH49MMZRyciUjUYrD5WGgYHDKj8jd2ZWoHv8rVssmV2qwqbk8nKTNo3jBxRNdR85jfUWoaHQ9Ki8",
  "key33": "3hJ3gkNra1rknCgSiLnGGGtHeR82tR4bnbyNYq6ZtmAruGMPzESGfeoVcdb7MxgVSzKwtMhr6qzPR3mnnqFtqGti",
  "key34": "5GSAuP6zuW2nCAyW9dF4H5Y5UaBRdJaxK2GDuiPYAACX7VhbuAmyizzie7jv8jpXjeNRJudPrNQj16sScksQMEam",
  "key35": "4sHJJcEDB17WYkcXYdtwA7SiM5JttbPTXFYpChK2ikUDeKrCC4CLzJwQmMzYm73YcTBCCXXDxZZ4XNuyWfeZDr3F",
  "key36": "7oicwAnxuYCwPaGYhSHDqmqQpUMps5i4ksVgriK2oQxcHDsBtc5V32qfvLsFmDrkmWmZjuqbAdbVpiAfGcbaSSD",
  "key37": "iKzQi97356vTE15TfT2E3vHNeS4mkmCGCMuH4TPJBDr8EGiFhU5gsxMDuPbzZD2VekU5iJNb9Nm3EpcWKHrLBWd",
  "key38": "21ZFNNL9PoHA9Pu21Ze1KexYEmqKY5HtUbv4jwMfx2BSHEbnxsnj9P9jcw9fz47nymKhhsvqniMrpnDCD8a5cFCt"
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
