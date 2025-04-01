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
    "4rkNVfL5YNomie1EGcYfPL6J2ncs7zS7r8SkBsBbotG5FzxUK2Mrej45HuC84Fh85oKCbuv8Bh8F8eTaVrjy6AuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mNKvVS2mkD7edn41fqqMvNX6YeJH5wXo26guad972Di7y38WbQ9HBTSri5LR1FYR7HT4ZvPAhAP7kAwu9anhZF8",
  "key1": "5QUEwcbwr54gPikkdeYGLgdNJg8jxtExBmJo47dmMK6cJ3XgfzEuBbehPN66MVnSaaDyujQUSKVzceo23ZWThsyY",
  "key2": "4aqFtCKCnBfTDBzAic2aqM9k3NeBo7ndBSwD9hvofNE7dL3ttSobHQH7NP8B3B3CHNqpQWNg87tTJ3n1L5X1vydE",
  "key3": "3DkZk7ceZJHuLpbGr7jsQA5W3kPcVAvShmag9V7cbPFuyqm8nokZsPM5SaZb44LZnFgDjspHqhwvSm1NCWXzphBV",
  "key4": "5eKjTxEtxXMbHLrEXVLdx64XppFpyVtkwzm9PGju2F9xD5tbizTQXqfY2UPaWfrEvgfVXXPZr4Dh85Jujo2ESVZc",
  "key5": "4uFVMdZGF2Co7pHLBZbLi4MVnY8dmCAjQZ4ePVHuQBye9T25QJn2px2tfpZK7UPDEfumqGrZGa5tBPzDFeMJCAQc",
  "key6": "2t5iJPr8H5Hbxeu4bR74s8FXyMkhd79V6x8TYRiAK5Cq7MrHathbPR8hCdazyioGMjc9HvvfifsZV3PVytgeQZ3j",
  "key7": "4wpXK3UpVt8bTKstCoWGEq8FmbZfeqp2pLpEyG2YLKqFX5hcRPCQhA2hTSKjGX8xhC1KbPuuQ6nhekiSNToCEN8C",
  "key8": "5bQdtbK43z1qL5xc6bz6HKhLzhcA8k2XJ1EUYvRDnECdS7CLtQP9AxNWtEZVvz82LmAha7GmESg7MysQCVQxAiwz",
  "key9": "48tbmhr961fFbUvsvKnFpHw5BPwq4hjFRNnu1KQqwEs79LrHr5eDZ7hJ8QWgb6oC6nnHcKCLYsbiq3skyiwHAzRn",
  "key10": "61d5nwjJABGfuxZmkh87sBhqn2JMcuVhvgiYUAWNsQA7dCiKWf3pS4uX6uYqWLshQzWhc1ifiE1FDLLGPoZXBAPJ",
  "key11": "gpoCt2odrXByswzWf7QNYVdVQaoWawEb8tX3jWbcwypEvUxKfydC1hyi7mYjsQZW4JkfxUeDe6ojCPUQqUaVZmU",
  "key12": "2TXpuWgBMoUNMTojLZDDa7o5KnmFMRbLNPhvutRoEaFjwmfNcawAvi4jvXF1Q9dwgtU23LDiKrqRuZfC6EhewYMD",
  "key13": "65ksn1tAgJdazbY3nTT6ZXePky2j6aHVNhs4vkZ3YDK65pasyqD4huwtszmjP8Jw7JYDfc4vCbdzDCrGx4PG81eJ",
  "key14": "5JV1PCRw9WJxc1oz5SeStxST7vbphrUmGt4BcFjseGtagfouPEpfUmDiNyWYghBQ4m1GGL5UyCQqZmfARHXo4EF2",
  "key15": "apFnTmnpVzkKkpf6sEEwrRES3nmo3DcPqJ7FuubQBhWPDYKpXPF2GSs7vxjRAG9WRMTgL7YqyG3kFmtpVcGJwp4",
  "key16": "5hbWt9KQP9nyx6twBhoTycL9iRHf8ArLXEdD5nnt1VsPtJ4c2uzpxCkjW3cX1bJCixJGmhtUM8Lagog9WZjVSSgb",
  "key17": "4wV9fs6pzXK9tGEZfJjTcNXuPXg4eXTE9mpiHRx5ndQVvnv5pcb7eWwvjNJqG6mjgNynhy5zh2i3Tkg4R8iyhqVi",
  "key18": "5wBCi1sY2TRfyQVQKS8qxuU1wwvV1z8VQcVngrJhsg2H3wpKDdHM74xewbzmr11DaxT8ZuC4yYn7sw2fshbCq26u",
  "key19": "xLLpJu1De5J3Uf34cwMnnPU3qokVkCRmT95TCmxZUqtEd6eWpyt7TeD2Q31UCKff86ywzisfPaRt28XhAJhNnJX",
  "key20": "5oT1kSvXR1t1RipZze25CDg1VfHiRjPezY1kAoJSZWvboJjihRo1aUnD4UyyKa6mAGcpnXCSBoWNYZaxBzAdZSVo",
  "key21": "ipiYry9Tz8i2tqELkYjZefUdmyotqDBHCSF3Ta1mUJCLiJUten5TytDeAzrJPoQ49pJw8EYkRPwngWBFH5qjmxU",
  "key22": "qwfFV9dUqD7gctn6w3KmL2MgLaKZGYeMDenKZbTqtaWAqTT7My2u9C76dLggozYT5yA59vNTFrbC82ioXiNRpE9",
  "key23": "xvYRAxxs1CnthvzFe2LguiF2tcGjM9pnSxCMDUHV2SxppivzkGw3ymPzT6jNBJAg8LfsGDxZEv5JcHJmNzJTKet",
  "key24": "4JrnbodXBRXMbttYNyhJx6YrBJwr5BcEjoeoy71z1qjw6egUJbEr2V9m1C3rV4ec1mWw9ormm4v75CM7FbA5TPSy",
  "key25": "5F4RjVBvcBJ2HdoZmjHWeuhEHQL7BMkZbzMNCU8wj66frmjSyoNs6VmUotu6eFjnC3kdK9Kz7wh2XNJkqejB3a9d"
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
