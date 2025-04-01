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
    "3JMniB9dJ7HM1ELna22QFbNE9jx5ZT2HB6qfuu164bid4DMMtd54rw2nNahwnri7AiwdwgHuQb5MUY5o4Ewo5g7V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VwNkzYPV2qEeY3Rcj2Rt3RuEX8BV2twqThH8e6cRDDbB39NSs6TZw2B9MKMUazaZXfE53Pg9TGFNoCUNXZWkcsi",
  "key1": "26DzoRZYtyjSNxoV1tJ4mAqGUH8juXvuduKNpXLtA56c8wF9sS4CdUgeVxwfbhD6Zf63aBQJodNjcFc21kPTNH9J",
  "key2": "3vTeqRoTJXVk3DxHiCjYx8Rd3AGdDofLDdvFrwddN3YLhKNAnRdhy2sCmRfeS3yCgF1vxRSxwtJm3Jg6m1z7pvbY",
  "key3": "4Xs8DrFEcWTxVSETK1gTLSAma9JXySkDZFo1A6QJTaJ3ieHLToQjYGmUt2tB9tZrDPDAmyBMPS4oQNSEKhia4wg",
  "key4": "4rPqxam4oF1ejdQTab5w2WKJgRrXyPf1Ms7EVDhmyo1twcgNAJm5BbackFTCQnTnVH3pC3xzZo3bWyNYroSQQsk8",
  "key5": "2WD2G3aNQQ7WiwkFsSSyLXjJ8M5AiZkMtRqdUU3a1z3aZwLdtB1U3HbyUftLpXzPanjTi2evbo3nXbM2CRCGvuqK",
  "key6": "Bg8i16h8bxHgjUmLEL1GBRJZGGC9WKsZc2wdpfnVfrT7rinaVsUBqbaPNszc5dXUUMMuWXduL9HvGMZLwvFY62g",
  "key7": "e2VYPfaQxq466odrBBTbfkzMEJSehqhuVjUx1VU6J8EyCUbrhPnw9pB58cw2cSLkvtcPXsGAVfMyNDpYG7rcbod",
  "key8": "6EcRvM1DikYxd189x3TDoMNL7ozMteodVJpSh57q2QLms5Kfu4Xp6Z2iRRNxnX3JVmmMNQ4NtC9dS3hVqdmVEv9",
  "key9": "2qudpjJubM6RT1u9zrkTFWRdZGX2rP4usv7BoKjwAAvXNRzh3kDrbYowvLKBgrLfmHpeSUxyeB7rLqBaEyCM6MxS",
  "key10": "4URnWYsLj9NJZfEi8c5Mvtq4Cp28TbPAHVPoojQNq5yFBZy78AgkDo2AxrEcuK9mjWmSeUPxiuyxbAft3wArNby8",
  "key11": "4JS8agnpgaa5oPF6pWWNFDUWMiFyQL1eQmzCAesYm677XPFszye4GvgZ7CErWaUpRfiL2JJXLhuy45gbXfuvzqeB",
  "key12": "3pPFks5tJA2XaCis61uGMvVJophyc2kVsirzaM8TFbSin15hgoa7Ca8rnwqA5PuWETgNcgN6KKi3DHkp7ZXVYp1K",
  "key13": "2yFcAF6Aoihfm9qmYXz4pXDq8igywyppEUjNVKdd9iwn7FvPAZAgwFs3gEpgFbHWr9eAGC2NTiKfTWjgxVHituNT",
  "key14": "45bMQKMVvyJfMWFXeg1JuYV3PeAVMmjbbLHW8DS2gkswYo5xLFKDNoP3xULwRnk6PfG9u37wLRbvzJAJBuvBZjca",
  "key15": "2PVv1sV2mtEcV6d7DFQT3tyBSiwTUhGqNJ2gcjgWbUmSAoADZ17iK2Mpo2dGi5PPkLYNnTfWBEgPHokfzszjtyU7",
  "key16": "bJMeFx5VBdNn6d9x7nqWcihcaQ6Z5JTanPDLubo5zTjb8uyzvGGXHSg83AdSJwHsrJ5grX3BZbKpc5xtqi6k5Xt",
  "key17": "61bRsU933ETkJ94HV9HarSKWGRSZee35GZuGmi9GyQ5aVZjR2bP82xg7dkYa8KrR92qHBqkFXEmAJGVSmGrHyJPP",
  "key18": "5WRnLWjZsY66VPYU1nSb3x9hwPkRH1rCzhVnDfcsbP5PkbhoHss5hTEMtYRSfmrzBvxLmXj3E3TvNvFo2UrLgEfs",
  "key19": "VLD7gdDQ1kpmRiup2EUFVeoojYaXBVezDMdpQ3BxtNaC6r4CMB8YQigQN985HqGjMZgX2UPU6SaoSBGJeE7baTQ",
  "key20": "5dNogQJgLNsc9onXrv6RvymcVjq8Ddb1QAJNHXNBm27WAwfcuB2oL4DX2391t5g72RJBNc2y9FYMT8gVJ31dXJiU",
  "key21": "4CZk2GmVdJD9BHhHHjkTGrrRyNWQt6ynK2cofVyekdeXxEcbiAyacPAYYx6bDVmV8EoMxrgTYFknqDWLBpntm9MA",
  "key22": "4ZmUDJusSDWiURa3YVozyWSkWPyFSeNDfUKGTnH2KQPZ6K54JPPy39W5dZCpdPNkKhF9fHTjEhmf9TqZhGqrkAAr",
  "key23": "ACAAWfrVBG2QJ7kNNjvCfKNExWA5qvmfiLFv9apR5Xk4cD3xsnNfUVa7xw4SJYdoK3qbk8iR5gQdx3kgn8pUhjU",
  "key24": "3z2nvN9LoJBvfKHenRRDnBzbtGrNV6xKhamubKLygQsxvrUC9GRb26mT3iaBzSkCpVin3eELcxE74v54HMWepbAr",
  "key25": "3xhEMpYfmTknN46MJSzfAhAyGGq5uYqxrSKSsxZdtYhwVfyCwHSYyZtSqbuSsgEk4szLTcGXYJ3RtzDM5A1nVDZT",
  "key26": "5XecR4WHoU6d3vkR9Ktd1TXZibd4Cp8qDZ7ideTbJ5YK6S3WignXPTR8rV3zL8QAdBp5DM5utwSwYs2vAHvw9aLW",
  "key27": "45B5uDXnBcpQQ4HgJpCV1UQkbUPimeMqX952xGnXZ6wf5FZc7tjcBdBQKyNEzcAzSSiLa1r6DKDfwXHmv4T6foSF"
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
