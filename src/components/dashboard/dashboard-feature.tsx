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
    "3GQDFEYuCySPyGa3X8hEqbr5syPTtsKB2FHGU9GKPPRz8fb9NZ39E1Td3KDn3QzMcT66LoevMA29BkmwtkrhjUj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iUsc89Zg2U8PSvsRqJozByX4xybuS5XpaJtZ7HKd9N2NfKizvUvBmmb7ZK9t8AKwPsbUTsoRvnyXDPX6eYsMTCN",
  "key1": "3Sr6D6DKPUezMwcfCfxY3tUjwBPKVPPpwMNp9kvuGxTZJRvhek2wgZcNiyBkSfd7zX7j6MG6xWLkguyRT34rUY4y",
  "key2": "2kQtHJhknPCE2V7MMUdRtHevmTJfrwTXXburj6uCc1A5ALp1sH7R1bVjfWgaTsqxq3gX1ScmBw4HHFdD6pwUDcHb",
  "key3": "2cvD4gc3EstDdCeaWGh1suuAZDC4W4dY3TauEh5Kx3zjeJpxn28WDRXgWyiTNJ1b1S9mnuC3xtVWmw843znWTf6g",
  "key4": "3sCserKsghAVRYCYWkyEuMLGPs93f7kYfFxA2Jzry6ZipGn7uPdmyen63HR4pL5FjxNpKL1ZGfb2ZP6x6trPXijY",
  "key5": "5KDFEuuwDxxhK3YC4ArGNeBYMPVKAtdxudJpNLL2BCyGHjRxAkkdP9tR4zLGhHqUBXSyCTsSvH4gwrTy79iFkBtf",
  "key6": "48Z5dKHqAvkMWQjMdeUhR4Bf4YLZYME3NVwTWqSaZd3SSg6cXRTahTvB1vBiyPAfs5re65z43M3Sb4MzBHA2r34g",
  "key7": "CpwhhbMVCaC3hDuRgtkeeBWnvyo7kiAZyL4Nkm2fwpe66sW9QMZGvrPzDpf1ZMDqVCK1ofU6ZxwmTCQeTYohkzD",
  "key8": "4wrND2xcZ5943PqGbq2QfzSXt9pxuBYZa8R4QRhk6pcJQpRo6thQkc73FsnQoXjmyLaY3DGqpaPJoPiV6JJi6oG9",
  "key9": "53GL1trRezQ2NYbodQCPvASjqwqaPjbzF1TVjKnEsY6TybAM7RwjocPXCCDRhXkfrfP738yxsE9A7tuYLKoVxoZu",
  "key10": "X5vzYZkjSYQyikBaKKPqZd4M24oKuL7oc6DfXTHCnfGAA6AJxd1JVbe6TSqNNata1DzCDsC1VjmtnH2ghnrjBN1",
  "key11": "3bozd9CKFx7v4HKHtAMXhUzegCXWMHi58dPSvVWxLkqk4iUbkpNpErDZYQS79Bs1QZxwnbFZH583tGUogspnrgPp",
  "key12": "4PmSbnu4DUy7TQoKz8gzi4nhfAjGzubFJPhy8MmbDLyPm36PSbFNbYHtp3v5TpFuj4ZAfFdVFeadQrrvy5SodK5c",
  "key13": "5cUSkkxFgJd6sYE8gVChzDgpKL39mUDgmuJDzKQJsLgLFhwGVyYnVhcSN63L68f9EysiNwi3KBYWtYV6VeN1LjWH",
  "key14": "2KWPAFmKUXhAVvs2SkZecRQcSur6tkc92SPiq7KJgG4vEiGqpvGQ5MdXDNcdfsce3kee2gTvovctmiGWmP6imRoB",
  "key15": "23BNKHjmuhWN5LZjzdZLfi49jXJDUpKYTrc6SBTqsVWQz3G3PnDxHMm6VjnVALbZau273Svv5SexDVh7GUJMHXU6",
  "key16": "2nwhXTQRcds1k9XAo7x6BsBmY799o3ZaUoMDaniH2wgvXAQFMhueGPZ7VXzZwr9heAh2YMXqbcBNAvTbnyhaVb3x",
  "key17": "4cYCFWs38Xky7pgGa57y5Q8V4jtJWrzKNJG2dBp917jy8exaAUJ64tqBaCxjeDonbNASCJufF2iZ5YVU7LMoBPvQ",
  "key18": "5MHdsiMGUEy299qDXqDv9L1q7tUayukaoBpGq2fTy59Svm9rAvAnrSivjSDJLFTVdkGJTP2TXMgGB48wLUJ25CNt",
  "key19": "4rDK3Mx9d1GgqjubfX78VLVagtNZ4YeZ612c7AEwYPovKjY3p35YV7EoSaGqP4s6zjHhBX4RVzvgnKVFaAaobUui",
  "key20": "3CRDABx6gadLVA7mj16yet7kjNKa3c2rsAr4y9skPALdeSzqhHzwMDj9dAStivseMZ26oAigVm9TACaoWGn212jm",
  "key21": "1TmJdP8iT1G93rNA5YJ2nRUmmwkmnmEsAfFmwY8oL7RCEYi6CWHovGyR9h2YsQBxhp7VDKPY5FsrCu8sN8B1FuC",
  "key22": "3DrqfQsvAzX4kaavxM1fkdGdSHdWupuGaNQbJmrmKs3q9A8buStsGRbQ1Yrse2FBT5zcCWEbqBwZd1BcqiktCFG9",
  "key23": "22Qm6VCoA7cXk4oCaSC4SBVE5fpzdiszkUoxHgy4qUtx1vB9YAb19xvQXdiDc9YTpVYHJhuD2YWGFaeUGPWS7a8i",
  "key24": "5YrpGRT5Bfx2MEYE9VobUwUfRgyRWMEvsriUgrMryuGtRJeA6NUcdSjHpmygpb1sT3LFADNoD4CQPEUoKeAAF11x",
  "key25": "5D1935UmokS4n2gKGTmPD1751rjaEUkYqR2pYD6jnEzdbpgbson9Dwmef4VS8z5U3BRYceiEzFRPVKCvine9KdKC",
  "key26": "54ybeVD9fpHXERQEsWDpieN6wvhk3t9JKUXEXazqWrGMcmuP6A6e1BEnZVBBJzkaCPSjPEAhg91xvmbHiBeoeWe9",
  "key27": "4EmkTJy9SAv9T13tdAjSaHcawHEfWoBnrGT5KbMXKqA5tTNMBJBNtLtGgJrFkbaspoRXZwMV89Xnq7vNMwFz8mL3"
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
