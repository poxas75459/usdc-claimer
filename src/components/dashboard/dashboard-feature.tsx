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
    "PnkCDDcHw6DSgveK9d1CKFcNarPcZGrUp8UuhtRQs1vnJCvu1797epMRo8sq2LwtfDuLEMbng6FutUKZ9foQzYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39gJreVhgjNHu1wqQnjPhvtEFcsjo6Gxh3RhJq3vujFBENNjfhCmGjpqJzdXh13bDyCRhEdCPz98ZifP5nBAaZN5",
  "key1": "n4WRVduZaDyVUVwg2Tgw3iuwJMK4NR7bTAC6R2nMEhvebWH4DHCUetxqoiu5QP53Q6xshFYRNhhrdk6D4XuZQJ9",
  "key2": "4oYCnAX9EP2jwk8uJbvZVHtCGKoBpzP5a8jzsbuCuxnAE7zfgL563Bfza64S6WwBxRaLqFD574iLi5TLTiRvDbDN",
  "key3": "VsWwEzaVcMioSXXPXBWrzGrkXkR2rYqdaoA2RdY7xNVmsQUDdX4C9afC51ZAtMx3iwM5iLkHxWpzZQs1DiMeZh7",
  "key4": "5SFwT89zxqQ8JyoNdTNAW4zEdN2xx6CHmSqZGgHHrHBDjAxip51a3RaFB3Y4fKEr9NruFHkfUsnH2xqmPEYErSWd",
  "key5": "owmCdsN138P7w9BNtY3QEX5XbCthpKpz7ANu2HS2LgncxoxnLSd8p3pdnchtguhV8UzidmrXGn27hPtx3hzzEh9",
  "key6": "znndzrzDFva648jfZEPBs3bzzuvJXgVfX6G8wPCkQvvTwKoBvMrcGybquA7NDEXz8biX9ocbcbUa77X3donSEVQ",
  "key7": "3K1VH7RzLCcxoRK1QAMdz63SdaYvhCTEvDiATbosEQknF64X5egfHpYcKCFEt8yDkMDbRhH8FgeueKpWZvuzzj5z",
  "key8": "3Xj67okPoTXJEBy5vv7vo9gj6vr9EruSy3MBuHYmrVfHBpNkwfH4n61Lb6hgh1qa7noPSHVJkXRrRFNPN72iPpKG",
  "key9": "5r5Cp3x6SXbB2fvUjNWYePnDpYqcGZUDwi8b5pDwqZBub6FqpasXTMXSUxfzEe21RyQwSLujVrkAFpu8wkAQTy4F",
  "key10": "281uBmEHne9aAWUncps5NUpiDSh99jbLDdVZgtFE8LpZcRHZkvhk6pWgkPrrohfTdEWfxRJwUBVBChopg9uVSx3e",
  "key11": "3ApZA9CwwyjS3gaJU1SePw7MS6UCfnVxzcNydbABJepydaSizXmf2m7FBJeVTZTggXppShXE9KBfvZvAfb5hNWrM",
  "key12": "2Q8oqosJUtJdvkL8DFJmNnoC6TyhPUKxLwJVkCrHQdrxX68aSBKhc1xzEvMcE9bg1YLQJSnQx4k35Mm2Le11vqWY",
  "key13": "5ZJ1sL9WzKTazD1xWbmbRxZ8HHaEMFzd4o7tv9quXLScvEsqLU31PWEByiPQfSZsj9LnZcS5ETJbys497HPnyWfp",
  "key14": "3kt3j2XrKrf9qWeoXuvJc1y9FBPJYzYdCavWEDsrwQPsV8ELNCu8xxwbeN8cNjehrucRz38uyNCD521DQ1jBDyE",
  "key15": "5hGQd4mS7kwyCzxj8FGcDLcUSqNyqpiWEoSbUFHH6FjXwgpvWNxfGTg1w39R4j4HBe4CKCXWzKA3gBj4MnG73Ey3",
  "key16": "51xd5Jw4eCSBEGkKoULUS523HVbes9cigELLcAYEZyEUg296weqAHoVV4eiznw48Duexq6nUHYmkksrY6vozD8Sx",
  "key17": "4VC8wm6d2bh8sV925C7AEAQ71irMweGfPyMhakXc8kJo1AbbkZUjB2X1tpNaEfvLYrXxZqsbhraAjWmye947CRcb",
  "key18": "3WhD6yjLPddsbVahakbzjpBA7ybv7rWubtekeYXAVaXyEJbfxqN3wRGCKVZcmi7jnVHL4BEXMiszeDRpEK3hk3oB",
  "key19": "5pxkdjThTB2Yd3EYivZ6TF2D8Rid3J1MwoPKQUU4PSrXJFTMg8Lq3C3jYZBwgoozihZUYoHrzx9y4dvZbTHqT7jT",
  "key20": "3Uewiu55zr8ZH5bvUtSh2oefMXNKcxjStoLFaa7AFeXDYVxvgBWV2K8bQ7iQYQzBgNEHN4QacHRrWaRnvTYSmgCr",
  "key21": "3McWiurEyeFaMYLiu9gdtaDgBN5aE8Tr5X2u3BjsGFR8PD5Bwn1oE5a3gEFnpvaJEN5VVX4GPx9wLNdVitKHBYjz",
  "key22": "5bDUms41whbZTVhHc4iydTbPb984J2WwVdJu1wLAK5SdEQxyBX23h4vdwmp9vySFsQAyneVJKiDEojLV5r6ChcDQ",
  "key23": "x1DiuZRcEqYiUv5Dvtug2hnQSFtHqSEha4rxCKz7mYgzuEoeDKMZGV3cSi6VrfuFJiu1VnWf9ZjET6zcpZ1p6PS",
  "key24": "3BQFJ47o5ZZL753aHiwcgpA4bi77X7CwQWWos7TMA8vZFqDfqd8ZEvPphgLT4f3qimBuViF9wyDdeV8yddbebFQm",
  "key25": "3Q4QnAvqK9Fsj4jeXhT8kSq9uY9jQBbC9zMyKrnEBT6WnvN7YTuGjLhYzNAyPuW346hc4gvwPvBdvHJifCsaScyT",
  "key26": "2yCQwdXkhVtrQhnXMEt2wXZj1qK8GUhWXymdGWQGBTUbTMAYYpmLSxPcqAcC59oFggLhsjgdgsWWNh7reNrB1uar",
  "key27": "2o79nH5Vhc42ioHKtdHhzzbtvT98JT256wuqWDvTksMNBArzjqFHebDmdKBPuXoUsdEHrYPhYZ8D5tqWZ4Ski7tR",
  "key28": "LsNuyPWiDWGZEwqXQf6FXdRPCjUrUgZGDXDtGxmyBJbccRDDhUpvupJkp3HSGa5uA3wEYnVjMAqAEsW88mYRMCh",
  "key29": "355BAupaUqMin7kGyBQ4Kr552jKqPsSeyCXsXsrcCNCPdEtEGi656Lr6TZfeCc2NaytRWcqdw7u8CkdPMBYR4vKy",
  "key30": "4yFAHEvqrHE32EXTpSV9F1joQU6bebWQy9wsDQvum96868a1vm9GktW6QBWFYhY4RezMxs8LDXEqX4UvY6w5KEja",
  "key31": "ESVx1tydviWWabgkc4fqtZZo3otB9jFH2VHqNgQAez4XDFtv2aSfGcwnbDAm4qjjhUZrwTkqTBmWxpX7dLLKK8x",
  "key32": "LUmk1vW8BzcduUKh5bV6brDRthBaECbyk6c1QrN8qrUsCwStJDquWAa645Fk8DRtjwhRYZDFtMStVJ7BD9pGokP",
  "key33": "GXjhzpd6XG2nApPq4r5WrJhVxvzdv24aiAxzMHVT4je2g1t13F7MpCeewKAJxgpGQsxCLwhEWTC9u3axdTG4tJT",
  "key34": "4ZMT4u4Bx4vbupYPFF3wstYXmVcSQ6ppChbmGDqddCYiDrD8yfx8gDpLUhsQxoLcghqT2AQA3be87mcJchEfLvvN",
  "key35": "3HFGeKaWwB5rcdLbgfVcjE3AsjcG3GMq1vhV7K2t2TqALWmPgXyWhr3wjDCdpaXpkYhFGhwYbdQbn1szuRidQs1N",
  "key36": "4DBkNx7UveSDbpLqdgxmnM8ToYwc4LV3Kuocbe166L7GBm61WcV1DYMGU2KpmP62ioiHL7bK37wAW1diiBt3c5ic"
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
