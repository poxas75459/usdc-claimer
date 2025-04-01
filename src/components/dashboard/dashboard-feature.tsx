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
    "uQXqNWFTdpyXGzbzcnt9mRTAP5wrkQkawsDm1CeP41oryaREDZobDMnG69V4jr3p6jWxe6zx7Aex9AgwGSwwKDs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BD2Ay4TVH6RSoGvgPLW5bSkJuCeTcuPHxNdjfP6Wz7hK3JS7TgxsTUNVeMm79rzuewvrofTfRNzvqCy8m2fivYS",
  "key1": "5TzesKPb7sSSwdG1kEqPVcz8XdyepX2uMsYd4Bs5h5QQEE5vM8221LGM9mpsuAUoUab72Y3JaAQJu15xggDAGFEc",
  "key2": "4rRBVh9XY8ibj2Mcu4ZGL9arQTPPZtLk5D3oXCNVnjepsN96WL1HtiRRwSKd536DqTMBZar4gpoQSARBD2QXwGAZ",
  "key3": "2q9HPBwwPAZVZ5x39Bty1vCNJ9rzKqxHKjchj32rQs91T9AdaKWbuCCCi7xHcYNk9ge95C2UDsZMv9iLJbcAcvsw",
  "key4": "5uJuD2EmnaVsibkTDUbhweQKCbWiErbffh6XG1FJkDonKzb6sWz15tJzbvxaSiWV6RdNUkDEiGVCdz47EUF3aqCF",
  "key5": "fYjrT9RS3tCY8mbZgSBuMyTujU8pYmbrszdLiGEYYNMExYV4FQ26ZT37LabNkRzD1RTzcjk2QuNoM8YHds5tACM",
  "key6": "3chqH2S9JrY2FGY1yza75RHH9k8G1is61ed9D1iV6ZH1hWD3zZZFxzVpLCE9kQMjWkqpZcfP1wReUqWugAHshha7",
  "key7": "4Lkrwape1vJPSNwFPEfBeC97X82mExqNJ3UVyiE8ska9jHhVK6SFtpDRFVJt858hqfGtuMxajmFg9yMuQzewjBY7",
  "key8": "3TTEwfY8dUan3sZUHPM1RKYuKVg5gvgswq8TPtySqZBzcLvnagFZawihRYBd8gJUqHJrrrTYcM23RXF7qNFcHk1i",
  "key9": "4iEUt5krqznq2iZwZWELjanan6V4TkbW1gvVxCruQq5qdGjyeUatbiMWLGeYdyjmqR6bCReGek3rri5KFk9nAkQ5",
  "key10": "62WxffnkBtLzoJYpgER2xD34HE5hvqoGL9sxF6ZPKBNPPXd2iNph1rLHMtZDVjiAwur16aGM9N2iZE3jbM2HnVF6",
  "key11": "4zDsYsjGXCevit4D7mD3wrqehKG9Wrc3qdGEm9aJfv8uY9dGf8ybfmg8GhQPQHjbLWJVYCwajWevXb8Jo9S5mM6j",
  "key12": "2ZgeeEdCMaxM5Cpn6cAUMBJjiWPcn1XP3dGvFsUeUjqbmj1kqrF2iMcEicnMJ5dAofCtDfy2QfXrkaVU4MuyVqCn",
  "key13": "5iBZYy9Zj2PTPykDt1Co7pvuVz9oG1d3WvKE38JLwUQnMfajeBqXjYAA9KDmy2YmfnBo2xWeVQETu4YpKGwrKXZz",
  "key14": "4PBwaivA4EYV1SW5TwZgfZAtA95X5AmLFR4NAZWcgGn1PZAenRc2ZyrjF3jjL5vhCEGZMybBNoCcQuxGkmTRSLYs",
  "key15": "4duTPFb9ywejHFueJsmGW2Mjr1aLcDjr2UxkNpQ1VsK2FykkAvTuACHVT1Jma6M2PCBgULJRomGVbuifxUfM8sG5",
  "key16": "3CkZUVrSNWEGadkKcebo1nXZUJP6KgZYt8HGxuBaNv62b3yTmRHbhvB4C8StKNbiJpeByoEMjGvLtBsMDMxRowWw",
  "key17": "2Nqc4UjPqxTeLsJSTry88FXT8XbmDSsneafjWjFCPHPxNx9GZ2twfMt8r5fVL2fVY9WxxKvh6ZGjWgAm756G42Vg",
  "key18": "2SPKRbpWPaGLMKt7c2jbF7YAE6RPVAckvRHxBLGnkSoFK1fiBHsXoAzwHfnwCe9isWT1skAEVxfZfZFuGrJpK8oF",
  "key19": "35YYmUiBsPBZR8L9hFMZ8rPgLEZzsY6jWE9GxYdSphQkABpN5jVMe3Uadbk4jYGhfjd9SJU7kWnGA5maoHXbGPBs",
  "key20": "44ryQAnE1xJuGrg6aBR7sgEHozdwUcWCu2MGpzQnrZ6cjKJwebESnFfd9iBpxSqRKwk7QTCuJdRZtuTcCBhVTfg",
  "key21": "5YrqAbQDHiTDoKxzJhQgu9uSMyhVmKrws5i4xxCME8ZuvGoMDTWBFYFSiwdwjACugj1bGs2v1JhM5uBGawFJfr9w",
  "key22": "3FyTkeKg7Q4ZFwY2iMKv82hsvSpb2zMKAHU39vVRgNv1V5BTdxm685RL5ewm5bFj8xk6qSnDdqbr6ziMxrRZKQRA",
  "key23": "zPVLtada62SukqtH4PR2TqhD3PTme6TFEFS28LxkWh5bshQbRn2TJZ1ajR6xEnpwQja2tW74FkrhbxF2dfr7Hha",
  "key24": "4JCSFmYiCYCJKn6VrnxfA6DLX2rbRrGkDytsmNDvQ1nRHzqHABFPgL9mYtAXQrdr6Jp4A5ncLki1PqDPUHPgC3B6",
  "key25": "37Gh8fnYzXL5t49rzLERcnXDhg77yTmxjbDXSykuTnzBychv5SEQzUjkxgs81zXf92Q9k3W3ZGcGQRrmN7yHCeb6",
  "key26": "5jdSbxWWs6sSzPkxv5PWdbkowRaiD6y3ege5RNZJLLk7bGsqLumwsKkse3YVVW5Fk3PwWyS62SeqJRuDgSVrduGL",
  "key27": "3zkvoDZEVNmZxtDw4Sb1PP1RFsuhJQoVN5ZeunjLiJj4g5U3vvM1ZFdi1JrFaFXKr172ws4JzheW178wGAjoVjXA",
  "key28": "616zP4L6n2syEJZC6jdXASUtnuEErC4JL9q9jUq7e5HQ6RCMtbZjTtigusW3sunJzFCFq7cYd74uvk5SfRj3xnX",
  "key29": "5ZUnehCxEfQ7DTupz8SCUsSyJty8c9UedxFzhdrYwNvhJJvYpfw47h4g6mCvBvqaMKYsKBfsJjobL9dVnqYs1xFS",
  "key30": "2spKjNHAhHBYogLPp876jWhwkEc3QfwhBohUJA2TwL3sQmwyrZtoxr9sM1EtmjnADK97eJFUvsLUnnbHu3V2Mbfo",
  "key31": "2wJ53pGf3az65JSeBnum3j8pBACW1wewjVVyvgMDYz1pXdrVYJhg9WNuFRnPHvGNouk4pobyeBHahx67swNER6YX"
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
