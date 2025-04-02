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
    "4NPgs19kCDR5j2MUi25j5Z2fLpDybA3Qw2K2jFSh7w2Da78Sfn295YNJXe8UPFgLVDHZww9yBki8KavP4dz87mxy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2erroz8827abhyyMtHLFgM3iujwBjohqkNeJNzo67LomTFu3b2DatHN2Di8Tx4y3Wb1ZhBM8r5stgKPKeqrjZcfH",
  "key1": "2FqXYw4Xm3EifALy3q6HjSyhCg6rs2NR7w65sLp6wrwc5WB2EMRLJwfD7FgTN95Vra7ftxunHFegW9nrcnMvztq7",
  "key2": "2wuu4BDtpjLobNvS75Gw8Fy6K4g8w1wszr2WrErJxrCp4U3nNNcUstEzpkM1jMoAa3Yxxkdy2EoTSiZh9aC8g2Yx",
  "key3": "5wVxDu92PzGX9iNPD7r4x891BsAvGhH76Jj4btv6Xd3DLKnw6sVmtZPh6kD5aDpz1kjejfmPP5X5NJ8KhVeVwFs7",
  "key4": "65dKYaXRynRJWYFvwVWL16gVCgzW5r17fsAEyAPhHJVUb3Er4ZXetZmTjKFMthVbvwemtyFwBqL2krNDNqfwaAb7",
  "key5": "5gsmz74wL2syHHXtizLYZupHLS4afcaWbL9ztoYo11sfp7F1JtzoVZfhECfGtAuTqiCNK9vvmNe9vprcz4Yh8BB3",
  "key6": "4DD4qfyr11EtsVhYgnnf8uebuDeEzQpUMB3zzed7MRtnNjiTgpCaSEwR4W2x3MSZLKwtkV8BcCQGFnu5bJf79FW3",
  "key7": "5wDcJUhLhMHLi9MnpVH7AjAL1yso8E8kBCYyQn7My8Haj2xcJ17W4b4xiR6cFjCiXRQAxwCydcw7Nm3mBSxVexLU",
  "key8": "23TLTwaSi7SEhAHsgLuoSvmdcLdU1u2HumgYzoqsZTYP2pD77VRKTcoAGk95rpXu3KYBW43vfS1zSSyd114KRRmW",
  "key9": "4La2JwptpXxVakKYnbvbGymotVx6AJrdSnNDA6yUtszyqYYKyMx9ab5WjS8yuq41jJv5CVELPQdErV5f9TYKmp2j",
  "key10": "65bud7TD4baLZTF5vdUpoKxowvQHmP92Zp8q8zYs1hBnrT5zVjuewPc9dcuCWzmYqLkPJzkXfnd2bZwDxaagGAC9",
  "key11": "h9CEKWqF3CeP9vcCB7fr3ZVjpuKELhKAuXXwEyJiYc41LoanivjQsTWJAU1NkbcDVLinEBBEgFS8nDTngB14Vsk",
  "key12": "24qpYgYvGQoQNgLu41WHKXwtrS5bBkDgXCZtHPJ8uYozTVzMvQvt15SUpiBD1PMHMpwBPiGS1VhkevXSHD4WgvZy",
  "key13": "3puV9N8wBELXTGBRxWEzfp94L6SCJEr58yedrTGsQ3w4oXDs54qqMSmv4kcFeqvTD3qoZQkRwayMcF8LyxAsL3Jq",
  "key14": "DsMfYg5sfuLx8wkry3b8MrG1QFX1HoN8ShJpieE2yN9s3ttqEVhaNH9HqcujntuJEHFXHHLVFAaEGwR6RZip4NL",
  "key15": "5PX8HsfHCAuvETEExKVrzNtPzSUVL4c7yd8UU9EnwzUwx3mGxiRyWzhxmacZ2nNTpfsok2jfEoEGQK3aGe3g68jp",
  "key16": "6FF7XN4RJHub61DhLSLJyWSENWeprHsdRByapj6VNy6KRprz4uGSytj3gBYomiwsK6ZEZU2Q9Xynu8wjEXXVCcT",
  "key17": "4fU9864xtswbFupYirzv6N6sSN2ubrycmX5FCGrPhadwbQZKM3sx8UkzyFoGs6Jx2JtVzz5eq3rZVSeZMtp4VVHs",
  "key18": "4rwwHj7DsvtgA8eLM2tkLmj18Cod7uypkJ13FDMtGek8dJMZEBwkP6ahcGxm5xaBmqeavskKNJMRKP6d2yiweFDY",
  "key19": "29TdvvrLrNBqVtxTLF3Yzxnhm3rSf5sc6JdmLiSrdqUmJ6GNi2mhuyPDCVGRc9BAknrYZSmtoAAmUzAddvmE6Gf8",
  "key20": "3ULPrpAcVJErn4CRC8wFwhkUxRLAqkukDZXwW5uwNZXNxYZ5z7PGnD4GQJCWV1UGz65q5otWR8bZ8yUSCY3NjcaP",
  "key21": "5TitfG2mddT3LyMYBQWE3UcCiJsU2ALm2Red1RaBzY54iNGfNWeYEkrPbm7FyS2kEUFzNVfrLpQTMtjA97WJaA5S",
  "key22": "4qvseziL6coSharTGphzJW9YaB1LkUSiqwgiQJA2WSWE9KH5ZcDNegk7HKZyV7Anrhx2KKaHJ9itmE479pos9BFj",
  "key23": "41y8ey3ArmN1Dkahx2yJ4NLeq13ffHzdbmd2Nn7tE2ANVNBjMDL2ESGZ8VRJbmWNgpVHcCHy9yWFKpSSSDUDwLHZ",
  "key24": "3yFRfuBzRhrVPtuF53V75rQszL2T71H5Q64oJdNrVSJsejvQ8XPEzVQVGFC7hwnsDqxrvJ5BHCJ8x2CGZ8rp9dBC",
  "key25": "3njTyLt3JK2uCgYiPkshswkp4STpzAgsYp7ErT1WvEqGVZAtz4V9nG88mzGkhCBavJFgFWXnSdo5vHaeVxEaZPBN",
  "key26": "22ZC7bhfHHgo5errWyUVrMWoWAnqnF7Y8uU3CBNS7v6ra2zdrSe4bgyJGHyqAarWvphPdx214TzdJwbFqDZCtoAq",
  "key27": "McZipyDhpCLcp8F9cSH3j3unart9hhT3aM2wLR2KSmHUsDHXgE2Gc6c79yCzrQ2ann3cFiHYZw8vc5m6catyv2G",
  "key28": "PR2voBjQ6LNatFGkcoCVUb3QMjaeZwxz3N9zFCNWEYeGfpKYzXn1KBLfrgzpQpQTCYMQ2HLESzVdWwqjcY1TkA4",
  "key29": "4nQjGUvj8ytSxQbAwErJNHwaVRaB18qQVdC4n8XprriXPQDx7t9GcemiuwB6PDiPcH9eAqPGhfAqU43qZdPFxmaL",
  "key30": "LjZtzF16VNbZdJCckYfG4bMTeLTnYr4vD7RB33MkdPLez2cP3yzVpVw2kgpC4R6s5EBsMoBo88a7KLHonrXahrN",
  "key31": "KLJz22rNf9Cekp1TdzuH4xeag8h6MPSd1QCzZa927yBvnepWCJBeVHynqtGPjg33SCJMe7sG9dXE3Fn5jN76p2h",
  "key32": "3KQX3RtSBn5RGnTkRcDBFJvoRG5yFMzMCZKDcVdvXG2cebBFzHZqCwbiQmmHFgQsWUpEBuFPQzQdZ3yV2j4fHEpB",
  "key33": "KRrB9inTX7RT5aFn6w8vLkwrxgeZa74692WJwQ23j4Yton1gu8duqWT4tpRNQ4bpPUFM5uknfWrHd7uCBpRWMs4",
  "key34": "4BVs5DSKgvv5maYPi7hws62jQzHaeqd4PdmntDyiyfBQrex8Gz7msqnmLbX3ME9qVNtDDZZrrPeeWeednnkFcPwf",
  "key35": "4pDHYWqgZK2MN37A9zm6zSJonf4tKiZWuQgzNpobihprxbX5TDrGCxKmD3eBVRn4f6A231s6J88U4TCTScPVhgak"
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
