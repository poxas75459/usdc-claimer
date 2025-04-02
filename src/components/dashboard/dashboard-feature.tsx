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
    "65JaRB5Wkn5xQZy22XBCfi1tr4JWrXnkufFAcrKxpsug5vinuTb1meccWgSMqwW9ADqejsH9Szg74JJay2CErQQC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ru58gGzstgVVA1o5yxQQnpBXSnniTfYMHC6EpopJtkBNxSJibCFMgyKyrtwcUL9kWyJbX41xZe7SU4qUv3ZSFLy",
  "key1": "5guGFtJZhSvVGyKd6YogYafkVrqhtc9FEk6uqqp1YfRLmw1V1iA2nNaYLE1a2Z3gzmxXmXiy72vCdgzwaAKwsQ6K",
  "key2": "32voYKnTadfoCbhPh6yH3cNHkzMioabjC2gT9L6ejbdAYUDAKtoXpUahyQu9q2qLyjB3fKUXjLiVU7CMHgsdRAV7",
  "key3": "3xqZBd72ar9yVezDwU2mA1tkQt5zLXWkMJ8iEB7h82ijtNxCRaQcNXoMnNDUwM19KahW2JdxetstrhoMQdwRuXeC",
  "key4": "2xZWrmsYiRkh6LByUVHHummdvpFCZtxk5BVDsf33etM2fDCdRgMf9MkfRbSx52NTnuTDm6k5qaStA6oHBy8ujo7G",
  "key5": "5DvjzBh8eWUMBu66RKmLvX2D3jbdjSNUWRZqymf5hvAhyqmT9iG8np6bRmjNhv7T38tNmFTajzwnyYtsjSPHBxqq",
  "key6": "4Caubs3FxC1i5FMdBPyuzdqmicRZzrXU7K1ey9A1y168sT86F9VZLaJfa84eUTU15fGkGUVSGByuMT7TTZeHicPr",
  "key7": "4bNXHb13cpd156qphnH5mvdSC8kLMYLGAoANkXNigpXaK13ArCrq3qLhivRdKdsWuGvRt2J5CK5tM6ku1rfvFajS",
  "key8": "35QChyL3knXJvgYzK9r9JjebbVqKPwi4L8D5Xbu4qmVWCziApf2kGfcFRd6VJMmib921gng4LVAgzbky6jvEkb26",
  "key9": "2hDTSvqDB1qBpwPx4Hvu7JuioGoaExqqeLiXJfBQYSq2uq2ZD4JkqUESTLH5oiGDdp8VJ1hpe9T9RPvFabUuh2sA",
  "key10": "24s5qHkku2rSnD9X14bEDkSUJV4Y9XtDZuX4hWsS32BokoXAQ2yFMAao2GRRh3r4dfc6TXkcbsaU8QHnC89z5qti",
  "key11": "5kxVQLxBtHGk2F24f2QYPgCHpxxiZ7irJvGHp4NoU4uL7fNhFzNf5R7DKT6B1kDaYXsE7VLTuEoS6ZwK3VivCMTY",
  "key12": "3wSz59HRkL4yi7czaM8M9A7zxQeG5JfVSgiGrKBpcer5DqXLYMG3Egu6NTLDiy5yPhem2zE3arfypokkNxM6qkzX",
  "key13": "5zwLnrvHxcrU993shsyAPG7Gn8PWGPe77XhtfwnFLntLBjtZuQ7YLSLvYiVqbVM72XZ2YFJv7FbhLeA9yQvmy5Bc",
  "key14": "2uE9jwkJRpF29wzt2CD5Ksuz8oiX7eMMuYsCN1zfkgSwaFhiFKFZrRvKMjzZNh3bAyMfzbg5jdSwJrxqyMvBK2EL",
  "key15": "om2CuHEC2fCf8A37eRcQzVgZxhR8FD4JcJXuKpWS7gtrFNjPNcr466zenfvuLWtRbDgwQkbw76tvxPWHcfjxyY5",
  "key16": "4j3HVoBse5f5CsD6DAcNjgMdPK4zPoi1MtxhyksNn8misC12FrCYmYA8UEvJ6MLa2ANgY4GMqMEHLHNGJev5H4MJ",
  "key17": "5q8ZpgsXUbhmfmQYpK61QRxkbED8LWkPi8SbT3zq3jDWTqBxgHabHtNWzskJzmp6X1afXbfDeEZRQamywHwom5pp",
  "key18": "5WhPQ2h765xB6ZRZDAdvMLW2QLphto4SSja9dKtvkRN98fnPeoYA1Emh6dttdcxgxqsU1VPwDDTSTTgoMbTGQu8f",
  "key19": "5XHsTCGkYCtE7qKvTFQ6DZrr1MXXMVdtD3yRAsw3NoVzijgeYEvaqF5yA5gX9zToPmCb7A8tEKicmwr6wR5ccJcN",
  "key20": "4dHBBL2j5LFa82o9PqH5SQE6kJDoTojNZ2iJaMUtCvVmEMKYwjVXxng3fN3oPsufwwVs5VAmKHU8VZedkbo9wUAw",
  "key21": "3XDueDzdo4jSJN6DJpCT3XZwKVQa1qayqMJdag8GvnPerNAXz8A9A1DtJFZZqnguAwu165ajZwiT4QAupMMfZR6P",
  "key22": "2muBwcZks7GUXiweFm4BK7H3KAYkCzKRiBzP1hz3bsDdkHARPUpUtPv7tDaxpbdiAT7E4ZqYTo6GK7gtVeu79MRE",
  "key23": "2kVUZ2iSuuG5KYGBQn1VMZrhava9Q5W2xG9DZsi9PNWP1uWepuyhjEtiWM2NUiNWni654CFYadZ6f2tDUe6nncyK",
  "key24": "5ewrfRP9fNAJBhQ3P2qEKGxx4HT7RX42nDaHck1s5P8NwZVoJVVSAqqePx6z3dAJWbU4uftHXa7sWVMLUkc94Jxu",
  "key25": "4HsD2o43JvU2SNjWk3rqwc3m5hR3C2XSoDBvrPbg3Qh4rvBC8MrntcicNwc9GchvSHwgaUeX445Cp1jr5h7Tq9VB",
  "key26": "3RCS9H7mQeM54roxc92qm9wrZLcSr3B1aMwfaRjWB894A9Zfb4AtiDac4WhuvG59fQxbNPnsfVPExo7AQ2U3FfjY",
  "key27": "4aAEPQaTfN5hkUVomrzQibWDybuLVPCf7PCCL6dXGuk7cJDFSHSBQYheuqF6HcVzTMPVkhDdu6vxLJtDKZhxwbNi",
  "key28": "66gaJKb67UnbktA8igUYRLH5PvFhZeQ9Xpdemiz1xC9nn2evLKh9L8j6K337cD49oBtJJftZLGESPhfAhaWSZJy3",
  "key29": "4ZN3NW5Sz7YSvubbRMRYNQaY1SkUzJ6SGDhz5moY3ZkewaPU6axECrUzMgCQ98WUNNWad9Lxpda9M3ppLoY46pYd",
  "key30": "287jMAfzW5fUh3eXUXNx6uPuM3Mstjib59YHMXL5mrfXBn1jCA9hg8ea3jRNVXX7Jvh4N9MdqZMG7aKZrkAv8Gtj",
  "key31": "48Rv43LHmMDT8KYV3JCqfHbKMkJvC52Zi1sszn27T9m2F8Hfx4aMrhhZK5BSrPhf91DjeNrv1QsKEKQRfbnsfSYz",
  "key32": "35P8uDpdiN4K4nrRxacU7ZkqkGYb1eDsKX43aNsiprmJxhvHYTYQCnuLAg6rTFwKRiLY6w4wdsG35s9fWzB4vXAP",
  "key33": "3j1eyYsivLsNe4rW332p4vP9FzAjUm9KDPgAuNtFxbjX4R5iM2hCfGc1ezsTT4GeecDDZDD7kSP2tAC2EbiQuPpX",
  "key34": "2rKDoahC71MhJ5KtdiqV95Qun7BPtaeiKB6C25cKiVSPi8yUwZQ6Ear8rsdD36bYLv7DK7pqMyWaui6MtS5zbqyr"
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
