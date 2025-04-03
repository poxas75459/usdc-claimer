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
    "673kGCUJfdLtb1Ec6jw4oLzPXR8RrKYUWHT7nHwDtk3nB9E12tF9TnZxiusKg9NJH5NVeWpaua5AssJ7SszNCmdF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "267PviD1XiY456fcXFYWDmNNx18SSJ1prKpXWA9WzeywpzuG27nssDUc7WAPPVEG4GAWYPtkbcrKnwqhzmyuuUuH",
  "key1": "2a6FbuRvrnuLTq4xbFXxwrvWrK3yz7kZsMhBYy9qT75aMYA2dgf9rXk7HAJFFicz3RKWZAjd8EaUwsTojjf5Jmp7",
  "key2": "3BCxZ2TSH5E1W8gQb9iTMtwm9TFe1AS6a6HMhx56ZTrE2bwxRTuQ1bvi7CtQwbZnNXfMZjBJaEpXYh1asmvFfaKJ",
  "key3": "3ZwJwshFXMizia682B1zd3gwRsoHMy24pEVvGXiz2qK1aFvJuAnbxfPMXEwRcyWrpGZMDAQBcSmzSrCaCV6X37D3",
  "key4": "K5EJazGhiNXHeY7emNCsLC7DTtkFhpqeyKZNuJpALcnJ6WjHfHWB514MTb932SdZZ6nvuGrpLt9ku8r4ErbvUJH",
  "key5": "QToBWnnUGhWk9qbiMqRCRDZ2cGqVM7N8bwTfNetV7B62tDPj9jBJmrbibTNH9VdUhKjbVrFVPPn3vXpSVgdwiCB",
  "key6": "5KRVW6jX9huix6QJfACa69YkYNABvUVwx93ESKspwV3cds6CodUSKPxGBJp69FcRAG6t2vXUhd53d67QJkVDTRM7",
  "key7": "2HkaT8r6w35Wv6XsLio8EmJWBh2eDEMoEWo5fDaoUDMZaBeGu3emmTJyjLvWffrCmz6eCRPpi5NMRzynpjquHLnT",
  "key8": "HD31jATy5RHHDso9CGJDbFd7d3yBeHGWjf8F8riW7pAxz8Wxm7EMPiWT4AeeYGFSeJa4XPafRrEwNGVdtoJLwkV",
  "key9": "2GL9n3nniNcd6uGWQiVa6o7RyZMzqUhr5Jd3VX8QzRkuZLxnGZ3Gq61nu4mz4jKbamVGchh4kpkxbvGhG7onEax6",
  "key10": "4WcZ1LoYyyPKZU3omqYdJMh61scWx2auE3ZHpS3r5ZwttZ8FUTa1cZAAzpfPsw1BTL5ApotGpzL6fGobprmvC2gS",
  "key11": "5o5VQbbkQLEg6Vp8NjEyMM8NvhqrrEqT5sFMPcuNUm4piqAti2fuU11ormJNVZrRWKNvrdai4pRuwPPDUbca733T",
  "key12": "4EnL7bqLBGediLkcW5N1RYMaSPjhPLua8ScwGqQPvJw1ycDuyjLg6mNomFS3WSpRuNEizYGkFD4FtczSUp6scnuu",
  "key13": "4HAJQTEsGk67Vzo8ZTK4i9RYxC65mVUvmUHsmJeMxnre5w1cUHmQVxCcUjqf73XRw2kvPBPy9JwGaaFTdFhs83rM",
  "key14": "oxoeAwzEEB7WKJHtHpS49yae19PdgPURamcGhhzYcv68oYEeK9UAWw5cPoB5PDsKBRptxMQLk2L1AMGvgPNPuYZ",
  "key15": "2S2X29xvxcRXtuh6hdUiBGiDZV1mxftAHdAFErmStL3ZVXNGKGj47VsJSPoP276iij8N276TqKYFx4EARVwoU95Y",
  "key16": "HZRVW5GFTz2aS6zQ1q4DbrunbNcz21sxCJ18mtbDsX4VKo1g9gELiwbKVRgfa7YQeM8mzQkrVjG9hvxuBxfJkvo",
  "key17": "nKsSgNwDD6xpzeXYta7NSx3cWxbqipBtxqiYUQQQhTKiuemcbSYWj5XbFhhHALkGkUcMZ4hfQnR14vfofAttwgY",
  "key18": "2EaiMB9BjbTrS7t9TKbwch9TEyXZDrwhQUSyNyEmbdjNV4DwVih9Rmegiom7xJiUwpqHuWMc5TcX9gyrPC95qcLV",
  "key19": "wCTFcfCLz9mJLJ1mEF8hhn5yvEoPwJeJaktNXsHyiaMiPvARMk3ueRkwZBFGBbHmfenp7NscRr2tvwqfaZeiBhh",
  "key20": "2RvgKVMwsWzWEwgRj6B45XeQM3DUi5o4gGXEfWKbDE6zaPoBLLf7PN988BpCJDbJM9XqngcTupkyVN2etU1xuANU",
  "key21": "3mstp44NqYHomehAxRqHgGQ48AUXNHHyFae4E69RDm9Yu1CAWvr7x5RWf1dfWZnm61j9Thud2ccR6NggB94LUcP9",
  "key22": "aH7DkmEWogtTcXAgcCub1Edav2eW3AprY7vspQyAaLpYS2UCVRdnF4kjqmZrr2r5kXL8snV1cbTgyTWRc4TSoxa",
  "key23": "2XfJ81oKDoiinBPCsnqFFomTny7N3W4Hgi5SGYy1izJek81bJT35eT4jCthXSxKDiqWzedRGpg2M87iRFB8cLzpq",
  "key24": "5XVhAe6E4YDePGuhfawReutxWHNUjSffrG5DPehcu62B4pExQwDAWxCsUZJYQf8pVY7t6bgsysnB7jTrmSc4iM6R",
  "key25": "46pTNPFuT6nWmNPNRpaXVPGGBEQ11yqKSJEDPpUrgPWGfAMQvDDwSWEYNs4kmTLi3MxiPsshXR9ugi6CnxQqmtJN",
  "key26": "u38skD6KnJZc4AUXwCZ9gdQHQDwjoGYDHHCUid7iTzHBJWDHeXaLypo7ULhjzTzuGYkM5VQXHsz7R9tWuKXtJ4Q",
  "key27": "e5MgJ3rNcqccYAR1Td4djcKbf5W7vezJEywWMqWmC1Xso2BsL2Ggj7JLEFNLUZPoaMbV4J6q42kvWRh8L3hs9ev",
  "key28": "2AHiE9CAUHKgLBQotEYu9YzcYYYHtSX2eXZS8rm96zyRkKK2vJSUAu3bPFtyaTi8VyhftNvcAc2hTvHLhEn4TYU1"
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
