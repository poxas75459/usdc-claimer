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
    "2ctFE75GmTGWWbCik5zcvuFvWS73bgAdZ6tikG2FHSdQeY2inzsnEgH97Z3HZuumsDoBb7qiSRbBQJtWSht8vMkz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ED3pzNhrLxETurthVP9A5LipYr1H1wzDbuEW2PFgbeJR6UAg9vmCpFeMTeveaYen7ZJaLVHXxbyMUzRTKnJknp8",
  "key1": "Bo8YzYbrfWUvEHZEFF7quYay8SRQqUPoRbSMX9YDdxAkZDaZ4jXfW5dAX7Zm2sdR7KL6FRCvmYxE4t4QKUnsqeb",
  "key2": "4vGGy8pTaCCjhcPUuf5JDYc9ChnniZJj99935ojT5GDFU89hWukAcTkWa19qTE9uU7MYAVJXxf2GinMBz28wn1Mn",
  "key3": "4jn6d5Qki1VepR9MqZods85HUYCgGp3tBVnMhiHB9rFtyHHsc1MHjLxGouHskYXQZgAiGbSbdb1RJNvBpY98o6w6",
  "key4": "5FPyNVKbdwrz1tyvtgy145PstYcwLzMurgqSJmAg3byVWPxsWNKJUikaNLFyRyf6RaZk67fnqGaqxTB6zUG161Ra",
  "key5": "26fcGGfcbZ7ioHrTBXAK5fuWWhG6crW9BP3v4dqAJt9rziN9G8YJ9mKYPurCpo1ihJX2gFRFjbGeB2vX7TS2q9Yd",
  "key6": "4nGLQwzQgeUQRDSidoH5sNBQdH3VpDrHXp7na5SCtHsU23v9vGV8RjSAbBLcFJH2hQTtqEsrRZnQ5Vb769nxqTA9",
  "key7": "29ne12CVT1fQC63mM2RVgqnk6PGXu1dbdqpqiyyz2PxvzF4ePhPoUtLTfzksFYgrRmzeHu7MVxjkMAt49B3n4Erm",
  "key8": "H9R9X4x5imPeHwPYpmBuVMHTXX333ZtYwA8bCR6LcDDJwgLPCni2DpyGP6VszwiWDtAeW8MZJyfZJK3FqBxCMt4",
  "key9": "5gcjnD9J9XYmt5gLhHsoe2y5BZGG9crsMeL6Z2NkcoUmgVtb8EfvS5YRSHEWDHxw5HW93UqMnZSX6tUMUCK7Jbyj",
  "key10": "3vBYL1Nj9d4w7cgB8H2A2ZaUjWx7jpWvdQjcB9hS8j5Uh7tjseUkEZTHiWpBUMynQQXVThWYLmHY1rMWahA5EgXo",
  "key11": "4jPShoMtCDuhxnCPLJkTfbbw4uFXHYJU4kN1V6SzRALnusqfYKpZDXRkiPRm9Q9woJScYyfKtqfj4A3yupNGSmwW",
  "key12": "rbBf7fd1smSy66Eoz98mQTQ9vbGWXfNAjonCGpNwS4dkeGg8FxuvA69opsvW89r9Tv33wu5CZp5XjEs9yro4ZbD",
  "key13": "5Qy4r6R2bttNey2zjmJgtvfe8AHQsPbNgPQc9dT1ED1AsvcKg5AXWKzcY1xrYXfZJrdLovd1rKkbuRGTeVNccXja",
  "key14": "5nkj3mTD5SyXV6Z5rWoW3jMn85uAxTDV291KzMnLvNEWFFkmzMMmEddUaPfffmmPGTZcNse8g15z3Zc9NEeYj6DQ",
  "key15": "5CfTPdYVBKRMrcCAXzWdRdpH23wQQnaiPwmVRFnbHN3wQ2Ae72qi1kEnfC2uy75jdZKY83jYwpZJJ8oymxCEZxWr",
  "key16": "531gJ9gH2bHxGeAk7w7FnDnoS9UMCEvqNPkZjBS1VzEW5rWN2mX82sG9WZp6tNyQK6FbuUx83J9mwsdx2XSYerWZ",
  "key17": "46cMRWKfGKVMSjaoHkG9icfZVubskvnUMNs2zPVE9xF29Hkr8Y3fbkdmE6GXQ9cypHMVFbMbSkxEcXxaC2JPzYn9",
  "key18": "3PZTrfPnEZTyXJqZqcAng4WE2nSxHXib1R6P79nKB7SCewyQZvPQLosCuxZrAHdd2dmYQPh2qBjRXaeDF1jE5vzf",
  "key19": "4PSD24eRTTu7tPUykHVg39bhXoXiYrZpEMnyh3j91ppEo6PK6XcSbverqQj4HuDds8EQHGvQ52UTUGZmXtLmcwwu",
  "key20": "5E4WYpcLnA1D8FqgtyPqULoEgxVs6iZUrpnBYg6pxWUqhSpRVpPhS9JtejmEZv55PyUYg9EHGRYuyoGfck21UdGk",
  "key21": "4Wutz5wuSJfaarrCjT8fguyC45TfpScqwZ9QzgCGhWKksxG54pqzVHGV4w9WGiT4xW1RAMzGYY2ybWfqF83PPriY",
  "key22": "2Fbt9bmV63gJpBbxoRaJ6ptXKfNhHLDApQrb1NcXWStoa6h5WqzcMWW1DEoYkfdqgJBvKrbckybtxRi16XbKEm2o",
  "key23": "2sJ9P37u4TgQ63o7Xy6cjU2s4ceH1r6wspXFxykgdA99uRnBCZfzrTVsiicEUWBSp51btGn3Wk7C2PGPzUModsLP",
  "key24": "26LQXAXzpALop9bcVyNdQ3X6qZNikoWZVj6ck16FrZSKGocyY9cyyfMAXK1m7HWD9QbtRDKvEDZoMAn4DMZ9fyT1",
  "key25": "3Pf8HehHFEaiTGb9UYhMgtECHiLBLQ7bbreNFgAWnZ14XZ8eDtMo9bfhpKozP9xULzHtURtAfHhE9p3cV58Vy3tF",
  "key26": "5fb1Yf6BP3X5fob4VLFi23ydfMhoY26nZVhp3oQF4LEA6uEaTjXvApJFA9QpwLZemoP7RgrE53SbXGMLuwb7YqeZ",
  "key27": "5WBtKs3AanfVZnTrbKL1FFfv6J6Rw1FCAityAtKg2u2H8zjzJBqdYJEXsHJewfzQfURr5Pgc3Qa9d5b8yNF9rBB5",
  "key28": "2QAKCrksJbDZXnJhy4eK8jycSFtnQZyzXBS3DNLyuBLw64D5TSSFXGXdqEhmCXkkgJVBQjFaLMmUFHBugRZpaEgP",
  "key29": "2Ubejkmb3vGCKpBxg87uNqdpsoHKia4xigvCZa8zDVTAEmb4HfTH8ZtRZ2WFjTqycMjscnRyJopStaaa4VZPptdP",
  "key30": "85gYrWwSeR5hD8oHFyWXRNRPmhFSh6Ndp7cLm2EWCEH8JoWY6uku1cFV2FVEMuwte7Hrfut3TAZPrMRfbgMVHVL",
  "key31": "3FumHmRxqbrCotZdJydEF8PD33QmAcL5vuC4MGNeP2XXt1XD8yH3ffC386RYAJZUkNBZP24G5zyMaSz7d3cy5peT",
  "key32": "4pcuVY7ukLoWAM2fAZtzMLrkeDxDZ2tZufmS2E3QEV2d83aNGLaRzgz9zXDF7vYjvVZFMFrNPXbgGhTik6FSAtGp",
  "key33": "5ivQvHi2kixB4WiRgTMKW9uCTb9r4uDtEtSHDbt1gehL36ReUiLPDo3dxhrtb9hxGVnLL75tS5cVMu2aHjnpcp8F",
  "key34": "GQgysLYm93stLCAfQck3XZLsUcFdSHkrtpZZ3jAV2bFk493Xun8bVB24U6fnLbSYp3cCkVgEk3wghtEGXcc36YC",
  "key35": "EA3XxQ54t9gS1Bk9rp6YKKnzMWS6jj2QqNyCwtxv8s4NGDeMnJqUymnJ9jJ7pre22G5kmiqPBf5biVmNErW6UxA",
  "key36": "2qJHHCSJ6RFenuhzRTFSfs1xLMtELBJe95ccYSKStpS9WKTwspkxh3NEf4g5UmvNDXL5yr8aZFg8aeLkahvsaXYC",
  "key37": "37Wb1M2fDFVmipFS4eEdF3BPifsHVkwHmg8Jp7EJo1KHiopiahTefXfJnZZTgZpWqFxUn64SsY2KGbgmFc7NSYHt"
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
