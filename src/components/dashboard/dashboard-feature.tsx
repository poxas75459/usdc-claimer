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
    "3cxpCwVNxNaLKf5Mn5V2ZuqWJ2nPSJvTZTXrzPJtiZkzhiNHtZL8YaBsGv17qtKXqVdw912pkKCqcxWCyy4M1g9u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eg5VAESqvfVETGz3kGobrnCtWvFTgm4NkYdTSxxfYUtC328Zk4R2P617NkmA2YfSf7TrBhH3Nkzf9CRg7LC7xW3",
  "key1": "3YHEBkv1j66fNBjrSzbbjeq7VKfhuNL7BQo4BPRGFPJEpV55obowtrpSWdRTzTZMJTRPqdore6usAaaYCfn4Ezz3",
  "key2": "64iKwbiJ7jmLGY8pVRvnjdob1xdutYFRf8QdYKABtZM3uhTQfUHi6c9mt2rYE5EBbbUcTKTGk2EHeQxd4bYTG7Jh",
  "key3": "2cmTKmMxYnRyMaVqNsXXMb3ZGdjFrkd5Pcy5Au1Hiz7x6izGuxFDJwTcfrK1iYsvGEicjZ4X19xhRfiVRQJZBRK",
  "key4": "NPg1ciK8cXNHAJ11FFFGGDCnjdaoHMugvLKny2cdqgPcRRnupWTow8qnqzRB4bc6yxHiiUDW25WXrtL5nHcnyEj",
  "key5": "5fYUtaJ1fz5TcCRHs3AjY2g5D5FLu2svgfzCK83QA1YiesthzpStmJTUbgWmmXDj3yCxUL76zh2QLdLz6hMGwJo",
  "key6": "5ssizdAXxGq9LqHESENNvEWY8MTvA94PU37Qd22CvJM3UKERD4zaPY8Hm7ngjccVkrtLkpQ7yp6s9QTEsuEc4YJ5",
  "key7": "3zeEGGNtqPjd8B8bwC4jdmjGV51bfEy7LDRL4KuEzMQfYEJDWTGCFL1gUwvdm258yBCTNdRhUFEvGDvyYZEqw2A4",
  "key8": "3aZ3j4KFfgJrwd3g7iKhZoyuQYZA2GNuLeYN4JqyLLd6FWPhM4hKmLvzhSpTriC2qC7wn1kWYjvLt7cnHJwXAH52",
  "key9": "4w2SgqHGUdJk1rnawPFwqeMCDJjd1uSmo7uLtEyRkYme5cejZejESq5YMer6UhSWudGKgdFVM7TMmUVpkRNaFVwr",
  "key10": "2fvvj1e1byqi3XEMfwoVaaNai1ZS5b2rxeHQG13gbgsu7UzdMva4krzY7v9udzrmPh4dgisw2Wu8rXZ7VpuLhSo8",
  "key11": "3DdCMJn7459vpZLbVPXUuNAAEG19sFTmnJ1s2JXpVbZDEquqawzWMCWYFeDkYGDYdenBmrzRipjgxUogJHkBTa2G",
  "key12": "pCbTLpZ6ct6GhXzTKCi391rPFpuvpQVfTvKvqT9dB25fHc4hiLrqcdfSXTshTQtAvDhjjo9Yvg4vNU1BrEUNWiy",
  "key13": "4rnxwnjMsrpfD2Swe8r6D3eL5ShuL7zpGFh4ASXcDdTCkNwo3YAvMveWCdXwyLoFWY9j5AdiEgEJDBtH9pXhDWpz",
  "key14": "g7HszwJpFcGhSMxsRA1GvoATtLAZpASahwXW57U6qvuSVsh9ZdxNFAk3Migtof7AVKjJfJnuBCgCDBh3NmSWLDW",
  "key15": "4HfDbd2KFiCQsuUowKLADyAZxtDRx8Ezi8V8NrEi3YPU27EjGwYAsLTeAXRktrKYfEZdtwt321ySTSMjKeaRC1sG",
  "key16": "52dcAkPjT8RBwe1oASMF31SXspo6PFbecFDNVsA9i3fUmEaX54wZ92KwP6AsfNE3BsQL5zLWYBkDno3UGXh99YPA",
  "key17": "6pH6q75LDuiLyy3WL5Z4AsCSXoh4ovpeUKgwzZ26KLSUnPNmi2nusgUqpPSmYgjfuUEn2XXPDUDwpD15siXjUqL",
  "key18": "2Mq47z6AnXYXCw9EtCAW93Cfdo9Mz429pBZ225fmW3YV88BiXxqUVw18ZN5psidCyUbpvMSmPiW9At6H9jSUfge5",
  "key19": "3uTsNS7JUM2Lk8gPkUF2PhPANhZGNYVa9AHtfFNnRhXTnnMCi1Nw3cPuhsi9wmgmYGXWUZbciVka5Q7PgaMdmzvR",
  "key20": "4r1kumJUs74jXcUy7LkUZTjgYCXG1wAvi7LXmjgH5SkJqYoo1MNy2K9c5dcFFGYYH2hWDgXAikZuwLgrEQZFNCd5",
  "key21": "5AJ9umNgB9wYhfHTKK3r8BDDwAfr7VHQ21gzp22aFHLSZhe7jcJXcFsfseHpWKxiYngwXUXGLdyEwaeek2LpDcwY",
  "key22": "NmwSCgfv4z5Fj3XXmwmD5XhVc82tBRfSpauZ2Z5tDbzVXKB3nmP8vaBGLhzdtF7LGL5tswbKY7U6f2YXiFxakWr",
  "key23": "2phM9AiyUgVhtLeUDxbQ56aeR3Mq2LrpkGZCXPJGsDTt3BAbWrMWZQyaCVzpLbK14pBbBG7ky9sC4GGvSTxTvYpJ",
  "key24": "3VJ7pqduasMpSY8ZkPe9tonVSw6U2RhPV5RJ4YJWj955LZHzTx7ahDNN8XMbPivq3H89EQM78wHwNMhEpX7DeTmG",
  "key25": "2ek8UCuM1eXVZgVPEjNfqNBq9sRCx76sdHcGFHTdkNpbmzQ38iMojwVs3d2NSUwz6oz84PUBwQy9w9k1mro8bSns",
  "key26": "66rcX8sdVPbK7zb2aqcvqGZSUEjhjj6vFYUX1ScBQz9eEU5K1McPWCNvZuA2ByF2RpYbA136gqweRNXnkTVmGnzq",
  "key27": "WLum2EWG2CSpxioziCxKE54tcWFXEizcSM4jz6R6XeUx2xvn4kXjFWbQ8boXgaMKfVMieURBJjTVmTVXndCedb4",
  "key28": "5H5iiB8rr2XLLCnMwkXa3zhyyAq9zgUxcAUvFHTzmw9iJEGzMW84Po8ebgbFb9A1mANtrzP1PrZqjpGsHPaW1ZcD",
  "key29": "5TgXGfgLZoxg9qoS1KBHgKvq71HYB5RUQoNhUPRPQvzeXSjkHKj8MPairqKhZFFcaDH7HDpUZTRVPJ3mBrV6eDSM",
  "key30": "4aqsPGfXW8vf9e5BNrnJHmzzsg8JaAXxVwf7syRc6jWCbsAnuVK5L4gWmDPYhKeMvCXzUPKjstk7nzKDF4dYd9kt",
  "key31": "5gJYPVNN5Goc8iv2aoWAahaF6op78CcMDn4xiVy1kyeCtoSfavSSUkqgvgrfc6HVUYQJNPDjPu9e25z5p1RUB5k9",
  "key32": "5dA2cChunHpqbA52Fzemmb532FMejTh5iQ8yDQYcfzfeSLwSvpmCyUWCK3RUz98JWQY9eJDTQxsgxhDcVUq63gWU",
  "key33": "34MtbwaDJfgrGNwnr3pMXRAyYqdoBbEAAVZhCW97ZVm7kNrrSSP4RCYST2qGb7djc8t8FyLk33uhWasgg9aUnEjR",
  "key34": "BccZfL9A3aVvsS8wR8GrjXdWedAA4GVPvMcz6ETQxXeXXzM18zuAURhupSqfu5m7heM8M5LW1ezufDKmBhuevot",
  "key35": "3GEvrsienRNQhbicoYJGXp9dAENnfA9ksWxxP2vuzMF1LzhFn3bZQHZ3JnzSqJ6mejtGJMCq8yyVmVs9ekJQoQ2s",
  "key36": "2FQf9BjSu77nkedym4NAPqbUcfQEmndnkYbBsbzUEJLyxsz6BCsUhRwtHtiqGD8uYRDF2cD4Qi6LVvQuETN74W7N",
  "key37": "2GTMK6LS9cou5cUEjPPCFMmbfbbDKFBb41innbv8D4SVBrZXc2RSFxagSio9pYPSoEgdYLgX5cBmEfCcEXUHr55s",
  "key38": "5iJrj4orRHbdKJZDKmMgMoy7Ut3VPReRpn1sR6z4Yc83pZVffybeFajw8vGFKJz16968CunHmjWPdugVXsSZw1f9",
  "key39": "2P2p8g3E7QBB7923xu1b5iRRYB8z67osuy8trTjMtRMLbYZ2pGZfrqV8AeZmNJkBx4gQMb43sbASp2ubJ3mqfcGD",
  "key40": "21Bz2kR3oGfvfz7NstvJsdg78XKEZgGNopBeCJxDChSHFYkwH4mSM1uhSFCeccWpNdHss37CXox3a4ZeeZHAGGij",
  "key41": "5oWD63MHwtMTN5YpUjAdiSMQ46cuKtjcWfrtkeUK2oFppdKajhotYuirnBE1CZTcdMx55dAHQDTe6jU1SaTXrnEm",
  "key42": "5eF1vQyR9o3ACEZorDu7miVQTuDGJRpJGEFxXhefGaCyKbM5erzwH1gsXkCvy9iaYUJ2ZjbenF54BkZTw2To3Bvj"
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
