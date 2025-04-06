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
    "3TNFogwUg8G8B5y4MaBa8grbSuuUndw7jjaZWKQ44ozCWMK6Updw9JVefXosxL9jqXdNEefP4dG9NpE4Xy1Ffyck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vCqd1rg7CEUW3xsfooaaFWcoCvoNoK55dGgrMBqycVYaXduu62Z19fFwEjHkaUCd5t7oF5UakVXNyqHsp3AsCsY",
  "key1": "49kRRPpSoEnAWZwC8CiRddbTQQictZ9KFrdM4ebbhq2x9WmyiUB7AVYySZZ8qxX5GtVoBt1R9f7vTZpaXHsXBmzF",
  "key2": "2NXB4aahgWWZWtnZX8rBUCeBbFHcbiRYUdkG8enCqRAL1St3FYzeZRdCP1hybyoEzEGuiveRv3ArJuiz72QSeTVp",
  "key3": "53ad8EhrSn36bcwdNPk6vXfvrz2csBNmGNL2GejkgrUu1fX6dTbFBJNvcM3Ht39ZJb7vgKLAFvD8jMhSgbCqYdvq",
  "key4": "59LMSCvufNzWeFUauouHM17YqtKQ7JZNW2eKEB95KJL6pCs3Yx2KhiZWfnjPgGregXfGKsA8YZ9ZBwY7aBpg7nPX",
  "key5": "5xurrMZzNELUuxfLGZ7dTB9wuPSGphyoQCCTZb2Jvbrq4LRiNWLjzikrEVf14uwtowRFEqCUsXsvppDZD6RH8r4m",
  "key6": "3HDcGX9LUM3ZvP8KHwPuQCacH2r36CTQB8ssJBxSwSNn1oeATjyjJa141S7sNFEaR85kaSfFXT9J12sTAQq7uyuR",
  "key7": "C3ErmRShddURsTDFbvjSvGvxdbd6r1A58qv1bdKMq5kJLDY44WmyQ8DmQVN9uwwydL5Uj9eEMEsS3nuVFoSUF2k",
  "key8": "5kEVAdD7bPqUFZZXignaR8XvZ3UQoemWUvBRZEvPMh8e9pY529XcobEC2RHPEx4amRi6HDdXRU6VTdBkGRobPC5g",
  "key9": "rVjbNKG6A69tSekV8Yqkvb1d2GVvPWNyxtesXKBYb34pimrYDz6yz6s4RDSVm576X2VR7dMHKEqTA2btDbLPDyb",
  "key10": "5oUcwzVRp3NcMMFMeasZWUh4MsSpbTC4LNpH6zokCZ61qtr6y4pQqiWkgcbZSDwPuGS6ANwTSbzrbH1ocZuUCHCL",
  "key11": "t3kRJDJyT1uR3wxHobZTc8ikJhnkNYmDQkkiLkzZAa2LkrRN1YfSSF1S8S3v5hpVayxtDdWUzNEASwXmVdTTNBj",
  "key12": "3fahjvdpYrZS891buWYvwwFgirK1JdWeLJfmainySmarKikPPFwsKbG5UqWmUJ2dBua48z3L6J28BNiFGHbyrQja",
  "key13": "3qmGtDMhER8UntbB3ExWkuPdnwaPBAUXGGCSoimegtcFjR2kjzqpUUQa1sLkmHsWeFS7YfxTL4hTct71F6xQKLoj",
  "key14": "2C6DTmKYc5SacrTuKTQineTwqNoGnwHPrrLVFCYUT544bNrtBD6aFTLUhHCX8hf82JD5rWDqVNh1WoRc79KPUWtF",
  "key15": "2DwRoJkZUU8Ctih7x3szw8StaAgzAJ9pMFiaRHurY1XF36GZRU1Azf2j5wNy7rKinpjHcTvtmU7ZhKL4LZJ3KQnx",
  "key16": "1LS7ewqBAPtx5Lxsxre5em38PpecyCM6DziB1frxdBgZKiuy4t6XjqG6kvpayrwdJNQgNaL12QHRDsbVnXFdcsf",
  "key17": "2j7ymA5uTz3rvWG2bCHDnHXcoke1HtKqQhbCNgQZxJ88PAFTXUw49DC9GoRF17vxi4xoqbUtTJjwb91nvpfKEZbK",
  "key18": "3NUkREc8pMe4qGZGg31NidrxAEnj7rqGkw8fPwpYtYgejb8dUgSt1EggadRdwmVWjhZbxEzAwNZ53vMYzuNcmJmL",
  "key19": "kx5BF7vodmU6YND86QbtPgD5qBBU8Q5n2777ndUKhMBnd6xqWWwG2Ei2EnWPajR9416qTcUZfTpXnJL88wk8N9N",
  "key20": "CEXz4ib3aEopi36ssmWLadL6RdTcdKRSQv3hraZej2CWktdjGi6aHgvCGokP5jNMWYLKRxcnbpiGGGtc5XqLpbS",
  "key21": "18xT7ZLhmrF3woQ9V467G5xn5yU99mBdaLmp9wW3qLUn2jUJ1LkYLUxBscf55m7fHQZw5nvjFk5WhBKF6mRA5Uz",
  "key22": "4DeYfcMRXt6UWmjB3qp55kPoxv4MWU5xNVL9NkRkGNgeGsPeKkd8qvdtwpPndKn3J7nQ4BsoDLQ4RZxMhGwyaE6T",
  "key23": "3ok1tRC9Bf1e8pJVpPWVG5PGwNkDruznAZGEwpYkQgA6kQW1EdJgX6F8RG35J4VtnRvrkBcaqrM2qUa9Sk7WaBGu",
  "key24": "2x2BaXfTp85HcwPAud87BLixZ4GbV3XD6z8ejvDpFJcUeAHYMXZDQP5DEjEKccPFKtc7fYv2mFVebBuHMPDi1iBF",
  "key25": "4yVp7G7kJrtC5Ue2HpkoVuwC9Hxmuu2b9X9Ja8T8uNF7sVVYRYfRVTZHC8q54CiEopus56Z6eDrBfeVLCj9dFvhb",
  "key26": "4SX58LpsQ3oBo9yJAsCejLfNL8UBU5JdfdKZiB57GAkYBei4Cao8Z7YFiceu4cQ8bP5VMWbGnXyAnrTtaGAYSGWR",
  "key27": "8B8Jy1Rd8x6EeTUNW7tuZUyEkDn8RUQavD1WDunAqh5f4bW67RmhEnzuGm8L4zaHT5Uf1mjHXqeYoFWr5h9VzgG",
  "key28": "hs8psPjeJtvgBorjjY7GnMSQvMYeTSDu7Wu9qFSG8y6r4TQGcBrpNDKua1iTydTxdamM9bKVxTs5FQhW7wZcvDm",
  "key29": "Li7a2ppRA4UoTGbocADhPjLfn49Cqk924YU3gXuMCt1pc6dKNiGkvPwBGNu4nTX2EXECf2wPVyznaZ8unMb5trB",
  "key30": "6GQoNU9qzJhx2eMsLTViqa9brKT5YyR9zewQ7jYz1B4jd5NzyytBFruMgBdU6ZZMmM2N7NBg9bUvus6nRJAHhfH",
  "key31": "2EmGqpyXp1PtkrQuzvuR9SGHm7hV2fF2AWDJbJV9xvHzY8WuvsnaSY1krhFz2AharBr98aFV3Vh7TKqPynouWRFS",
  "key32": "5UBcCD3Fvk4rPa6EEYMx52X6bSwpz4ZdzGFJPBUVDhjp24suYEu6WQG2pESCE8EttmzqKQBCnMJWRbFDwPURPJmR",
  "key33": "5oTGzT136wwgy6iBfED1jMVGCbts4Uy3DobHSPpqM7tHckReUcf38TZgDDTTyY1qdZNZwMswu8tKRH5oTvqyhtXE",
  "key34": "2YXq2bA1qVJ3YccE8H5F6b7fw6NtnjDozNfZBYdPTZdYnsdYTMv8kU7swYRYYxr9KonwhuSZpppocbPshjGkB2vj",
  "key35": "4TNWdymM5W4LQzshZBh8h8G9Y7rVYwKYugjJCwWiCyqgstBxshbbGjrB7exZc2szC4buzvinHGy2oMFzVadCKLr8",
  "key36": "283BptZsHyDSYca5naerfZYjfy3XbYJEiFTWu8WyfRhHYoyTai7guXrwC3922oDLGM4jauGxdty6cuqUWU2Yupwb",
  "key37": "5u9NxanGmGsBgyeHwkt3RsSuhpRRjpSSzFjy8kHNnkdBt58zywov2WDeBXChtD4BKomDjdyHGzXnsxZa2VjUYMvV",
  "key38": "3HqwGZMFLEafJ4JET7ocKEd9Qvg5MHRrrufLBJxBH1KywhfcoywM5ZzZHruJZTYh5fN5axeYxZ5YpxTJ3jAGKuCH",
  "key39": "4Yocnku6omWovjM3noV981E2ebUQpHhbmeHoehsATNZgfxbgmT1NcKcosQDoJC1NNWe8RiR53mGceemWpag5ixDA",
  "key40": "61R5MSZzjye4aifenh8xjCWqb5WzVHeLW7N7E8jXXg2yqqsWAtjFDdeTLscYzMyrGbnAKC4WTFp5R2eVjjMKo1GT",
  "key41": "287dKjFS6NGCG2zHMfxyEGW4NoQdNezvRavYVVdryL6YgNtfHdot3HZ95W6mBEAR5JQ2exrdEzbGPaWbQMZ3yZfK",
  "key42": "3wtevWm6XHD9TkDD7ZK2xU5mQWu5YUfpycDrFn6msFyqKfZ43AoM8C9QNsfpKbtSXmZBz5PkRAnJsaQFMjJmj93G",
  "key43": "VW5MYDy8aBudBSKZPf7MFbaFgsrDBXCKaeo2W2Yy3zirXsDT5Y9v23Z8Jcz5VT6s64Xckx6sEubHapAks6RqcA9"
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
