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
    "3w91NmtLu3YdjnC4RwxUaZyNGLyPk1S8U2S8SN3jTzMdNDqV1QjbtuoPhFWfgnQtzZ4VhAE8cwXWuVjuDEFPXmsw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3peRyyWRdPmmMHsPDe9nGn51Z25WAQsLerQL8Zrkzt1sNTys3kYz1RTTpKP2rD9dsyBtN5csykVseDtKVadek1G4",
  "key1": "5SR15SVZc5DPQutd2yYU4WtENdtawBxcUaC9niyCE6JhDWeXZKcoYUvzwgTReHqu1gBPtUyKUCXnWN5edUuzyjEr",
  "key2": "2LrHgfs7HrsCwdWxJ8MgYJcW5jv9eLZnB9M6wUpFdkNXW85t5iNmpdcAhXTmf3nnecf4kfmpMEdv3dGiZYbAiyBk",
  "key3": "4qH2YaRCnzzouzsCLNmm9QkLmRJ8SjSVxLvjoYxWB3n3mQtHGdKNRYPvy79FYmvmVZUTDiBwvSUYfi2EfLhpRGqc",
  "key4": "4yRGSwh1CULPZnHxRmKc5rm3EAxVDUYvbKBcumiSDNmoPgkG1RxHvExNHN2VquL5751fhVgQ29nvSB3T1MDmQy1v",
  "key5": "5zQ1t69JeGsibt1Tj17cnwhHZeRSRezNNtoRdpdP91BzDou7BU8Awy4DmuacnuRbCaQuvRATQV6R8rkk57f4jJgq",
  "key6": "5ALQwMeTbEuCsrdVbnig7T9w4UkGTjmBrvJ7tqbQXZd9Ty2u5wzHauKhTEmuYZkewxKb5j9mZRthxDVQpmESgRjN",
  "key7": "4vZGkPcryvZ6DLKjuUxpxmVJJwMH3P7vUoVkMeSPLL4ofD7aQa4hMAB4S3AvgvqLyGiNCt7CwCQ1iJUSNVt6QcN2",
  "key8": "2DTuwaWGPh6MLodt3ET6QN7FChVFhaTP5PRuzoASw5bDyPMgqwSdsz6vZB742xEkk7DUHcw6dLEX9TMkxTZzdsq9",
  "key9": "sSz3XBcB5qTABdakZXChhhUCnZFpoPB8RqA9pCzK7yFMTpVbjDTayJinUFUcccDTCBiJok6VyaWUvWyd7rpT5FL",
  "key10": "5zp8WeMp6w7wGnKKMkr9tF93erZmQJaQZvaUBvkR8Lui5NAVBnLi7cGE8Rd1eAt1hqyZn8jHuv9fccujSQdpMpq5",
  "key11": "5AJ5por2vmrN1TUKqmHCFspWRj9EofRLeqSHDY79tdS5i8WRuK7riyd6MaNmwutqcYTs8re3ugXNU57vErTdWftC",
  "key12": "27VbAjBtp1S4Sr7NdnCPHoTZ2JgMZW7gTZRxAKMdhn3u4tzoPXLeDL6S9FMN3K8dRgLmfUDz3ppiQjVkCZ1VfJdA",
  "key13": "X59agh7UsvWFfHUb7ug4s6h13Bss361mVvcW1SYhaxW9FXrRdjCWNUSJTvKdHXgn9cQDATN74nTAF14imiEaei3",
  "key14": "2rFkDHz8RFbmSN7Na2u9aBHwXLNRQJF6oJUQcUYxsiZ2nLyCAVsZ5adi5wrW87iifLB9wx5cVBZowV2MM2kPypyv",
  "key15": "5Qiissp293vHfEZHKJ4h2hJupBuJtWHej2DrvzzY8yBpvAxVcwhLBmxz7KTqnw4VAsm3ShYqCR8KML5hB38PU5uL",
  "key16": "bCnWgjcVfq6sSLRhCy2ZGKSiUCAWQEVpyUjn8rDNhSDQWL19yfxpkuBnYbKW8NLKsXW1zGu8uj4bs7xkNGtNsxo",
  "key17": "6xfncvLs9DfHjHQjePEdb81AP4DXws5KjcAXzjZ12iQS1LKSJmHikukczQ7JZX8NmWJ1dvNfSPi1ZtKUsa3fQoM",
  "key18": "32CJ1ARJ8Q5K5V5MnQtoiA5MkzvadWZmLpPhkhr3RzfrEbYpGFjDMHwfzkKLzqAnMzTNShLt8g5PrL3gkrfxRLnK",
  "key19": "4WozijCgAoLRH6qSF7Gj7jdE8LFyksfvqeropmFsxAQWHFoZcTPhiRBkajvAuhPc7zmn2C1TuBceRvM6TSwPfmrk",
  "key20": "2FJD5Ms5VP9vMXvdNMHZkcbNC34fA37skDpZN9ohAZ8skhbzREoWWVegCbmv8gEd6j6Fc1nCqETK6S96k731ovX4",
  "key21": "3o2TndFnqTmF46mHDP3x3mHhf352JwZNxwY6paTQdgsViWzTNVVEnpXgU2NR6kAqagRmz5yqqxKdVbvWtmGX1u8L",
  "key22": "4Qwuf8u76YYMDPeY23K4ai17xmi5277yS2oshZdphLhNNK5WqosB26Yrfuney8SGryT9SCDtn9LoKXkgd3amwiTU",
  "key23": "5KSATGgFdNZeADUGk5m2rkFnTgpmNtHEqNNqefMLTysXLfJ1FnVt5LeEmdJfDp5Pgh6ukczM2q7Pvzs9oetnRqk5",
  "key24": "WJkMfqeCCw4n49dvoXp8tyrTJBT3V6A82Nq6SgmxHLz8gFw3shwCBWtexm3pnPPxAfrQfbpv6m1W2EUqEmg9ygG",
  "key25": "243d4MF2iuuH3LxdxovAjvmAwVzkR3BruzCiVzMg9gBgDGPWZgNTWUDQPZgLi8HoNxFDmG9a1GZnqyk5m6xk56V8",
  "key26": "5sh981zei2qWBJMMp4rBRdxLS9CzYd3AgeRvt9txWoenSVmDc6qp1V44my3c3joJLtmD8uXD3tLT2GxBg5To6D9",
  "key27": "3YPRudxngwHTJNYBqeDgPERTDSZypWM5gDPsRmfFxPhpbwe2hPAtGG2LiNyCtNhHVxXDJNHtakJ1xeHu3YewYhuv",
  "key28": "39qNp9cLeLyKy4Zb6JY7ebi3djQ343okmRV6D7TtH7N7dRv4ja6YtJ5TGihVQrTnGLK1k8i1ek87Z75mLohNEmBk",
  "key29": "4aVLCgQTjQ9pEm9n7RMvtkiiSG2HaLwwuVMirYGZQjB8iPcUA6Uxw6iEdv35vkjePKrsTwYNM8QcnbSXsbLeZyHL",
  "key30": "1JvM3nGLsJN1iWAsNaGPrhdBkFQsT2XbciuXGcthZZNeVzCVzhG6iR8BC5udHnFhRuBJthmya4M2Hd9GDEwv6Qe",
  "key31": "2EKUTqhiMCFD163AWqXZ9t8Uc6Dvnc8rp74ZoN3HvaJYUssDrZB5mNYGYeoiFSH3mQ88UuXcuvbCD8anGaJxB4hP"
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
