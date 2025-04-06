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
    "3CTELMZ6kwJkztFpLnDQftstQ9F2yWRzUGrBDCohEcdv13PyPysGNbrE2K76rWtpQoiFyBDsiWNU97ibMdDXjqNY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Tm8KK74fRnV2DFugNVB5pCU1WfjEqLoveqmzdnXnNDC3J3E2KyWh1WAvzb8KcMgk2zgJxpyRj88MSdBR915ykv4",
  "key1": "328DvmLPoCRnEyykj7q4FJ9MMW8XbjDgaaWz8N8fWgXAjQmRub3cgPVqNmXg75BseUVfG2Uew6auhQBmoNJ9i5Ln",
  "key2": "3C83Bs7k8ZwYh2Wv7vKuhfBrndVh69Ay4AdBs3JHHm6HRRtuo4DHVomGP3zxFKLmBSGaCkvT6aVNbSEhToHgZbFv",
  "key3": "59aYFCbrBtysaiLXwbz2ioSXsrpjYDd7KkPA549XNe52LWk8b11f4Kx1fzRepHGJe1qN3MnXWNGXJfjBMkJTxUuA",
  "key4": "4bSYhfKZWZnEyjaRPb751vpUBdwSNVPcNeDScpfZzQoTYQj2dJYfLvW5XDJAYpDiqgSdkJTQsAboiSw4bGoT3RZf",
  "key5": "5BpXV6NxQHDSVZjdESRCoqbeXkH26dQR9qDZrXFEq3AnWWKdczWcTuSW6CyTJXfpoVjrnAcXHNeorwnTWw3Q1BmC",
  "key6": "VTusqm3TgQTEzu7WLuBMGYqXomE4Hu3mv9Z3EP14B1Vm6isiVoVTWfQnCasgnmKt6KgpKBZoEBh4vSKa6W6qibt",
  "key7": "3UczWZKYVq6aeawqyUBfwkx2Yb1sHtT7iNsTXKi4j9WV5H1w5YRye11gbtGeW3kLuNyUqG5zq1TGkaYrPTVcEJir",
  "key8": "4UGdPHBY9mibZH9hYAwzrxvNSpWw8TLffskjG7NXk6ZXgfheAbi5dRrjmew6VA7GuoyDhNjdN5Yn3VPyyMuQVFA2",
  "key9": "61PS3u1yx5oqWvHWo4aLrSUWMAiP1rSuCEe3f3YsUu5ytejhiR9hFdpHbkuzwdU3AdcNtU5ofRY3ptYuxmNiBE9P",
  "key10": "btbb3KTBLt7bbp5QGK8dvvPgdNcnsHBRSmehmTyjKoyxhQsK5ftL7jd7j37u6KyPs6yyJc4u3rgjX7WrbVdB2AE",
  "key11": "4xmPkkoH21hNFThmrfCsZjKoWvFd2viDaT83HTmEf5EUfHv9oehMZyDfcFbc4XM5kgPBi9xi9FCQFfJz99dFyW2J",
  "key12": "JcQZfs9Ka49YLiDpQsk2g2bEkn5jkr4fmT311TooPkD3LrNGkMD263MxpTRUiaUV3DtRsM3L3TRtYjBwGcwaB4K",
  "key13": "5BeYuyKfBvsLJcmjCGDhvmPEMxXQfedif6g9j1HrarMdsx9MAhcPjgXY3hpjSR7HKCzCJApXhru7YbZGdseEqLu8",
  "key14": "cB8fwC9ZQ2RNvKkPkueB3v33YbPqw1PrpA1YSyZTdApxXa8wHJwheP4Pzd8xqrnu9L4ohvPAPGnq8KjmDV1jvxm",
  "key15": "2c46GVESAUM24YD7PkV4EFUg2GCJT1fMYXGutPhxuSEtJAjQRa2EHc9Su1U9movWhkRhajtkTSffUAUnDpf6eNm1",
  "key16": "5jKd86dTWVfbk7AbHpSPjCeAVqVg7L88pUn9HBRoLCJpLdwVddjxewy6iRTJrE9drTtMJovxB5HvSAkeHuv3YKsd",
  "key17": "2whF265hhgp9sPYhpYresrqACcCtDaczasQ8TSykf3udcYg2xGiRYRNcm14pvdwMwmXdEXP9z3CE9kYMbvjRGbvx",
  "key18": "52Mm69f2yBoPodwQbHYUjqVGiEJUBNiJBa73QFQLvi1XPa1KSBSXABLHPGsxT64CKZH7wveXToSEzwguUco5T5ky",
  "key19": "2pwyun7DeQ5EuCU5R1U4uiALAjTAqa1sDYvRwEAPnC2VbTn1GVR1F2XdTxKJe589dcB2R788qmjtnwpgrc19NiXp",
  "key20": "3VVEmE4yZFN41seasiYZdBj89xizR8ngkGMvpzvyAEXgtRn2jZUDyKoEc91HLxmoPy3yjRWHrEUNBwZyVwMSwyJT",
  "key21": "5T7nUQsGCwZB3DwEtBV5saVNjZ5ASXu8zdvXrdpKp2cLZQiYBMdw9rUQEzmwyCNmWb8YBJa9tcGMiUmMDZJPhgGS",
  "key22": "5YdUubMmXokJxbNRKDcA5ScdzbZNaBQU8RBvqSHmnJ9hnsRjwbnGJcjNZ9rNt4bRwB6pukFuahsjLtfXFjgFigbf",
  "key23": "pDKy5RDnduAxbpcL1pvViUxfXm7Q12LyyQfq7kDVa9ViMCg26idoKkD7jV655G5qxjQRg8hRLe1L93qzHTmAtiJ",
  "key24": "3cDgBsTyqdy7v9mt2Jm4SF2xAJ1JBeSBip1oKLrvghs1Y2r6YTUrrmSESCp9C2iZmpZQRjsH3Nhm7fRPaht4v6cx",
  "key25": "4uCpmZSa8V5HmaEGvLRwH9YypFRr6C6BCJenFH1unXph7pLEWFCX5PKxVGngWiucDbzs4SGrVXrDAyw3ktUNzMUE",
  "key26": "4J5QFEgD3LxoZ9UxXnPTPziZYf2EpPmsVZ8j8B4RUAvQxhnfS6ULSq5ZK9cPYutoToCxkFPFG8bpxpbZHbXUuG3G"
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
