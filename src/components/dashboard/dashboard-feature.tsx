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
    "3UWisevR6HSad4VzrTQ49CCEg7ZPPrNdmpYBtSunnxufb2dozGFtg3mFaNVPSuBXMe8wrD87ZZ8Qd7wLjBr1mKoh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21dQo2kW9z7wPnieJMPZ3UAxEB7QzWLG98prjNAEp2np1EcZDWRUnarYxJ76NFX1EkoRYFNWA19uHJm1cv4wg1y7",
  "key1": "xdpBdoDTyvEB9RxbAV3KnJcPfERFQQsr16NbpFBo72ea9KyHkxxzcSoRyB48fkW6rXEivv8ToU7ZTCosfqxXW5U",
  "key2": "GYgvNS4gvHfSTXUnoPbdVZF1wYjTr4y3jaTJrNeokzTs9iFdFLF7x9WVUQScNzCgXBZP9rEVVsrujuFxx6CmWpR",
  "key3": "4SGb4AkLovtPer2bMtLmgziVvMBJLCGj2PLKE1yKWPoZyUmAyNQz215wog6kQVq9RGCpdPQSgGmY8qWJyaHu9oco",
  "key4": "2iV68wqrHaBNefh3Q4XpyFEd6CE31pitfbzz13F284DesXP4C2mWSSharEvHwD7ZePiCQ6JGsE7H3f5Q15n4nTSt",
  "key5": "5iex2fJ6Q4bBkSQv3QKKi3BhR75P4HHYrR8MApoGia2CaE8AJwQLq9DwU2bFZYsC6e3BnadYAxsJESu2JSjSRpm6",
  "key6": "2V9Ri3HFtfasMRQ3xcFBrqTs828GJhPMu7Mjqxh7dqyKG7qpGsjA6YHHDNfEwSo1XABBXG23ohbFVF26HEzThmLq",
  "key7": "3q3npfMAxZgBRihuNYKDreda5ZGTDACmnjSwanwV7sJAqtpuYY8LQ1rp9Nx2RgEZYm7yN1bFw49KHZNxKTQ8XGyS",
  "key8": "4mCWNKerJSCEa28K3kKLyiNzhYEAZLUtcbJm4vWMuny1Q79aHxCZqsVhotuVLFKpvYbkDeFmedzMZjss8fbrom9D",
  "key9": "52M3TZP9S65cJYpoRfLEBRE34eXXGcCrGcBEfnDXPaELb6d1RzZqJAfP9RSK7AYJ3sFwSPfkBipBbXGgk3Ay6pP2",
  "key10": "2R1d9k3XBNFdMwmuefeVGRCy9PqfkaYoA4b66X6rbrM3PK2zJ4TbU9FqH7S9eqS5QswdvnT6AD1Eze8ko32qf1mh",
  "key11": "61YpNJw9XmvzyXY51eg2j38ti2HvKgvcLbZiAHgUckeCrU83qu8U2KK3cDRec6w5FW64y2UFwQxwtJDBC8F6YzYJ",
  "key12": "2eUQNQGWrQuybmuntAzQNoRRTDi1FhHULqmZ59ma4dQ3ncbntiYzuVjBYvAYKEe8UKH4EbSZQqmfQgN3mVecZho7",
  "key13": "5k2DurbzhGQqfvGTMrcFpDuK52KVLnY55F3DwLgPVG5mejkEB9fakYcZvTPPLnsfgHG58aLL4m7Cy6ue6JqVqREv",
  "key14": "66BZwghcnJHCd6HFStd57itkSKdz8GnHaVX9jRFwYvHvVy6rY4U6xG8wR2JdSGrtQ1QWwFxgSZec3DvTAuQrQ2yC",
  "key15": "qbUKtK3uvqjnPXARYs3qpr12N3Yr7Lsw4YFe4n3WSQNL6HQAFfsp52BN6LUd5A8LiZHGFYYCiXqASLVyGMk8Qkr",
  "key16": "4Fzzo2pXhSPHohGNSLd753myGDDp6Mwn6LyEHyTkdy9sXahZS8HvwKyqQtoq7zFXJ5G7UcEoiqb4xjMdW7jbrtjk",
  "key17": "DrPSRF9wUKbHAJDNFRY4d5gFpaZY2PFE9ReTQVXxuuoJqXV6EhkjDkaeFPAcKeuwhrLL4n7oeUySzb6dsBdSSee",
  "key18": "4WRFopDbfcLGLjhGeq9V78nnEPhtReHCgbjiwfsLbJeCQtQL8M5w4ZLLC6nU18WNC8v1Nu7P52MZ3JiVLUrH4ACJ",
  "key19": "2uRCYCMzAd1oZBj5422ymSPzBYF1a9CoMmfa9yR5qgwRAZYjZuXKUfhCvsrbDqqfgnRGmr4wQ3E7q4g7xzWSqnXE",
  "key20": "5wrEc4JhXBURjSbauxcU3KoRHLUfGQ68fJhVwsaW6nnatEjrgG17G3bewLuBqBiA34yqZgCXcRaBBPCXt7Shrwgr",
  "key21": "5sQ1RXBjKG8TnaZ5UhKNiW1AQ7S6ZYf292uZYJGWtPSAnmwcggHngHBRtPwPMuMgNeUvCyeXPyy4utw5hSdbYWsE",
  "key22": "5W5VRaPmWHemEvHL6DaH7R6DZyHLexAy821pkPvB8A7MCvcDhuR4XBRLhxNvFFojPRe2c5i5RXY7Pt9UHWaJJt82",
  "key23": "5WudR3dQCCgwsChKh34WVNtSpVssWdJx2UnbvRZJeqDhK8VL3e4WsVFuTJFt6PzBVG99vadPNLWsK7BPRQHUUBWv",
  "key24": "47Bcz1X3CXWRvT86vX5Bj32r5avEMxrMaDicuet9JzTpy9eGEjSJW4J6nnDT4jRj52iKBz2Dq2j1NxcifMP7Lkbw",
  "key25": "2Hr9DEkjeSyjn7u4mSYPMhxkPu6B8hjGn561TMTqLofENJxTfNVy4WSBXSVT5Ww1dECZd2NZNXj1u4GPfmMGcycj",
  "key26": "577nwBsK7BiVMxTjTTSADsxtmGk6Ke2rem2A8kxFDXuqHR5VHrHY6m12v9GYLn1YEtSFQeF3sfbyoRNf7maHjYo6"
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
