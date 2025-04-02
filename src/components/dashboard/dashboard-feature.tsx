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
    "581qHH9RAYXxx5Hj4hpYBvUns7W58se2B8mJkg2PLcaG6cvLXBSMXumZyL7xKim9tZ6JwF9qPT4HwUZLQopfT9V7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RxwpmWrbopYTAPSjDf9yiFxQDz6NAt88srToJ8sLvHvoPw6cte73sZNDiaUjj9EvfoQxSonqWv8Jk3brtakQHeE",
  "key1": "2tX3dqPxsGGt4uK1qJBtq8PCnvCNi58pMZ2QR2mbxyDM34Br3fiipB3DZovifNAA7XFUtTAG5aEpYmhTtP1nqBD5",
  "key2": "4inQq55t52HRGaSFXHiQsL14DiLDr1j7uLcQcMJguPMHADcnjCJZ2gk9PSPVBc6QUdS2gaLoTquhiYoTwJ5SFnVe",
  "key3": "4BZHu628T8q1PSNhj1RaMmfjJTLyqG12hfjRGN8KpdP9MrGmW1YjJWxZYjkpDKfZgjJaoJBSsLgbi9gcfweMtECQ",
  "key4": "2gfP4tB4UkRXS5CUEdoas7rTBa5Z8U2q7pfAFsKEnJfuRnvZtcsKJmXYWRpYekSpPodcEzwWxhwr6pk7iH2C1U7y",
  "key5": "TaCX1jp4cWUGMjuQSWSvwdzEPBsmzrXyo1BpZivX6AKvg3EQw8afCUk8dVDEMYXq4MUMT3DZDp1ptDNLK5snniS",
  "key6": "yBbm3fUfXDjh58xekwXxjCa8D5NECYVav53XJGgKDmpXnosgCwqEiqd4pDxxwJsJinERzVGLbjfLMe6RZU4rRK5",
  "key7": "3ED2smRhLHfkWqtqG7gHuXCS15incUsT3aUhfvGtFNrhMvhJcZTmgFhYPFv5PdJoiR4AbpYfBVvSV1xZcUBjYhLN",
  "key8": "4p4eNAB1rbk9XuNDw8j3t3AA7oFxBBernuLHpQoF3LAvYeaAwU5EQo6RB5p4p3Gr8XEiCrg6rtSqqoXaW8XnJv7T",
  "key9": "2T36QC73Wt3srNgu44hJrLzuujBZ5kGffJZ2b3yEK6fYEcMe77Nx9DG9H8Q6U6A66QckhRBVnUvXyXtuSP2jd8Fr",
  "key10": "5FZ1Nyv93irNKSQBCArPbKi4exDBMuLhRycW6yi4b4C9pbm9Ynmbp71FGVmVZ74JwWfmSoq6wui16MqxjEqDKorK",
  "key11": "2WJfEiY6XyqRnTnqPdjmxTgvprqC9dcvKenonw7ZkqkLJQoE7aw9QNzPgKPuUHyoUEHcWAQM9WUL2Bds8vZRUtBz",
  "key12": "4fC2PDZdQ5zjorqY8zEVK3UUoSyH32Bd1yUS7zFsxpjWAoDbxpth4iyPHibqJjPDUGLnKke3TgqoVNtvrYxdmP9U",
  "key13": "62pRAkSWPeJyVL42YpUaoez1edkse2vSx2FkGWHTKsQ4CtQuA7tC4VY91MpysJdkL7y89ZRE93PjeQK4UJLoesA5",
  "key14": "4BJB5TYe7G7emTZ3Rts56wLxrNYducntV8duFRPVfK9eM64Nkh8z6sGMys3d2QbxADBb3GmQ14VvWHe26nXLDVnU",
  "key15": "3XEAY5cRMeA4zTmLFG9Nviu4HoDdrk9PYBGK8bS7tjMrgBuhVHALr5UaAnpRffiqWo62dxc1wcDL9JnNpCzEMmd2",
  "key16": "3SEtjn9kuVg7TgCfknrNutmR3f51zLSwist7qHYpEhLhgNq9ZAZbHmHnvgzyb8vs6cgurUsPGyDgo7e1D9J36Go7",
  "key17": "4SVBa2Gt6mNccAn18rbPLp3sSNxoc9s8wEa2XGRcfVmMPegKKXcJS1jFoGTzUrVtajPCVNpkwSjakWJzbQ3YhKUd",
  "key18": "4mwVyEDnLuUvG7ExjNMKtqneijYSsHSRsPEdkrGvvgKyRKvJ4RwWzmtZmWVmKLZhwcG7MUTuD7gwLeAWXTHrerJz",
  "key19": "2gVMJkN5C4RSd1Ve5RMfz74ANeJAU5JMP1a83wdNdgBMeJynoao65E9cq9UQmj75ApyXnjjcFMbneYTkjep3Q2mG",
  "key20": "4DTMVnN35ui3GY3QKDQuqAr9fpKmdFqzE2KUjTkUJvNTp281zQwVMLz8AoHDXoMQTtz78a6TUpeGeYru6vdKS6tV",
  "key21": "44dyPtA5eci6Jkei5ePEPQcqQyA1gKKY97LhMkFRJwAdv4GxktvWAkHbNXMxHRo3CkeT24nvabv9JZp5SWMCHT1P",
  "key22": "4qDaTxjcWbh1DKF7t39DqEgA31MdVr6SdC2z66Pn7YBUDnvHsDukfyNoDfHm8LnggjxsojxpgPvEW82GJUBDDfNa",
  "key23": "Yn7MsXB43ihADo53ZohbqALhDRkd2XrLfLvFJzLUEE6qEFtMqgeCX91VwFKPF86fyx8vDSC5f9Hhp4Wt8mbfzxQ",
  "key24": "2mqD7U8mfmKqwx9CyvbV9emH5iZnXxfXSjV1ABoxx5koLcyna6TFPoSTB2cXnQLxHStYXkCrWDNYt2WDk2tRsMc8",
  "key25": "52gvHwJDeP8dytDhAMpg8ASvLB4HTdoshJaWdpLkaAxVyRJQzxVP71AdmnxwsAC5TBHZJv2dXCAq2Av5qLboFcMQ",
  "key26": "62MkKQBajLf5SmYrz9VGkPYcnj63yyMQLWPbhEPZfh92Dg3QAfLVHaFXcFkyjYgzgB5ddbh2wQ2W4aoWLUn8vvbK",
  "key27": "2KjjUrN3KxggPFUKwaet7QnrLRoxopAHZzCPj9HxyNrFU4S18TweKVM5uBpLR6frri3DML2nXLAEqiZSLxq7HP4A",
  "key28": "2uFZ7WfGEtzbnPjC5WutjqPmB5Sd84ePceL6egMniJj88jkQTnhBLwZd4JF5XZH3iN4XbCuzjaAibb5LvhbP8Mfq",
  "key29": "4zuHLJ2Hy3e4KGqQVKFsrHMLG3p2P3hQTgp2aAhYEBbsFDPEGagkoj82nFd9vEVnQdnUy4WRxpM52PGXyr4y8N7Q",
  "key30": "3ctT9GTq562Vjea7jTVQiMVNVSXwuNU8fJnJ3SQ1SL21f399S6bdDd2DPt53CAqMN47DLWJBCqqFge52F6R7Fb9i",
  "key31": "5bm7VfFXSFPnD29Z5wEQz5pBiYcbQRdH5RkmkErezNm3KFbvKrdyHXVxaYDjXQYD9j69VsAduWkG3UypizccrNT3"
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
