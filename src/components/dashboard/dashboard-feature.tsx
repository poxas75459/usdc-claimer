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
    "4D9344PKcEWPbQBAorzLYNgfjknBWf7qN6jwPQ6ktrx2Lv5CEeMjZxJ53d8Wcyzw3uniy6DfV5ZygaqrsEvKi2x9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58u8HQyNeT6YFQNTuQEvjQ4nMYotU9aLFjtoLThmEhy4Mk8FAMA87UgNi6KyM257CmJZS2cq3yMPMcaJN2pVwy56",
  "key1": "53N6gQySHDvXeeTosDZBPaeSMVUqrvyz5X9uD38NZyoGUKvDsGW9gmEGiCZ1wp8pA3BDjTAjjzijf4yCMkCZjC2x",
  "key2": "5KdqcDyLKrQ6rKJbsL42U5s9t4xtLj5ZRxL9Kf8MuRqKFj1P7dpTBtbWs1oJU6c2V5fgh9qUEALGQWtE4Z2maJu4",
  "key3": "2cwL1A1HEmodSJD6JxAeaDUVyDayZ3opTLVgD6QHqNGXvZnBC6V9h1ms93nrxcZkZbkKvH8sPhg2qiwHMpy4QS15",
  "key4": "3EkbC4aebJT42SZ7khpoU5Tmyu11qqSbtBdQVe27zctGQ3zctJGzcwFTmGjEsDGrFFKaWnK6VcpuZyUPfBJe2GMX",
  "key5": "2pwuZvE58KNQUDxK9L7Bi8da9bmrPiqFoiEFY6PMTfrW9nZqZE1mSRMDvRfggPhLXzvs4wNrv9F8ZxcaT7ae2Kmu",
  "key6": "36QF9cSk7o3Qbe1vTYEJ9YpHa6u6Uon8brExVAhpMcAV5Gkb7xqURVGrxrNcU8ANExon2KsVSYMgYoACrHGDU2fE",
  "key7": "3hfwc1iaT3GFfHsm5neBgAAXw3KpvMn33uHX3bnXW3BBQ9KaL9ndTMhmq3yjCBSzFFwBG9F2S6sQUZvLmpe6tUp1",
  "key8": "tLzgraa6cGrWNCSQzZTivmx1JsX2rXic6kDmwyUFq54T98MAuiPhzDLBvSKvaihsdBoWh6f1nQLuKh3kNiSh67X",
  "key9": "3mJ5Px87N2YrxjQaHaEugC11dKEtzVLAR94CA3x2wwBf1bx2csWV8URCzUvSoBDrLH2Bz3vksxAkDJgBzaBuF3Qp",
  "key10": "2QHUBc6FYkaRLYnA9dDsja2E7gRSAHV6vvagXz3fNbYCU6ChWmtDtPQzdjnC4J4rigStwAEdNBT3HJMRTyLs65nK",
  "key11": "4JvR9To8ZK6Pfq4HYyXMaGVmdDwxUYWYzPcszPpJAiJA869xhz7DnWqXsYuoY1bnEawqTcfsAepQk55RBpWVuobo",
  "key12": "5kujVN8EJc8gNA2ke2E9Pa8LvENM1roC12yD7Z9M74JQC5ZxwrXDt4rStdnd5fbXNnACVv7cuXCYmT5W5Ug6EhqF",
  "key13": "2nJpzezp8e86c2KcWpwKgZM8YNmyAKBtVa6o28ha7VGRPuo7UrUFbzHbnm51BvX2dzrDiu7RwfuRT8MWn3AR5CuX",
  "key14": "2KCv9VmE8eQk9cALXXLpwZMJV23NXyiD7mMghJQLvCajZPCt5tU6zkh93RijzS3BtAP39pgiqU83BgdpfjCHm83a",
  "key15": "4uZW6mkx8dfF1PHKgzq8TSxhAZK78TNwELmgdzks9PTeEHrmQRp5KaWVSzEejAr744tTtgQSmMyWc3zSirheEgWp",
  "key16": "3p7VDX28mTSELLyjsWNYuV7ikhQKbNh1V7Rv5m61SaJGkPdD5BvRumCqDAzPTRZwcWUcKPsVVa3kzj6pxDvdLAvv",
  "key17": "1uL1MsT9ehyToxXoW6f1Uk3jSwogjx6JWiUudBKkBN8cP2PJVCUHcmhEjtKLv8jDhWYW9DaD4T2YJYvBy2bgBXh",
  "key18": "3ufsKWxKm88bv9HoPAwqNxtdaS74U1HR1zut6LHNZpdCoPkD22PwxyK6BGD6442HsR1CNwEkoKQmayKmmVuAW9iS",
  "key19": "33zaggXrxQFPFAHq4ricLsiwG6ka2B9JhrLfifDuvrw9zWAN2RYhBZJoK9hbokSMJUN8ysVzp2Ej773bBTdifiHL",
  "key20": "3Ta1PFUYUhHydD2eEbmWsW2g2MN1LGZ46BJuwjKEQipK1ykjG13cB4SGRPsfJrgsLL1xbFNsfwW6zMEexYwX8xnv",
  "key21": "59cDS8GuNSCost1MZczfApJuUnp1a5g1PNopr5gGHSJvTD4H7bgBxnCsM71oWxV4PsNQm9vMyjeZyG2xGPbMYYNz",
  "key22": "4x8cKDtEx2e9B94tiKqChzMee6u9NYhdit5zMwUdbzjCCGhYP7ghsKNxUUvD3fU5Po5H9XjLHy6wnUrd8QLDwyTK",
  "key23": "4NhSsCFHQR4u7yjQBG3LZbjEnbxBT8KJYRvhScDL8zJSyzX5vRUvHeg4JcHBn1x24jtXBHwJYDstVwm7AmC3QS8z",
  "key24": "2MAqrupPqehi7ur4QPFSGunvQHNV3SgkUi7UkqgFXT64iNeEHkS6eKayk7pVRKAJmbRHmrgWqCQSDQmrjFLyaP16",
  "key25": "5ysDF2qUC2jCkqrd8EGPAKFDfc5gqHhnMpSHwG7CTmVscVAxLQk2PMT2ez8AjA3m4qMQdcpTxYZ3z16eLpn7LWKy",
  "key26": "2bwhZTyCscH5bo3GYbzJKBmCQjiQSPxwhDH3oTHU9AF2cJD9Q6p53GWVq6bQUoMxb17G5PhDEskhW9mJJeCoqMi3",
  "key27": "21XcNULFEWGhmSYqd9J63bxMERXaDmeYHw3vcdvfS5eN76LRAYcrrS3p3xmvZ77k9nGkSnRoVzBu8GEpuiD4RBXF",
  "key28": "5Y2ovDgZ16Yeb9KES1kbPheDjDkSzhnu7YyevDyL1XrvitvshUdJbnE5UukaQidjjRH9d1ZxxTnEKcd21bf7zTSu",
  "key29": "5vkmfLqmThKoMtZXsm8JzWgsaXqm996b8a4iBrT3KQxfA9NSEy8SBiw5gS5hrMwrGTTLU4BNvtxJR8cSd4cUUeZ4",
  "key30": "61AoWPrx4T9NgX2pzZbmbhhvyPNTzozZaVCQJ9PDTRmL6ymaQwVWKV1GwCtKHwFZuQxoheEcjBu7ADTJYmUXhiSH",
  "key31": "3hzkcTy4Roh2PMWmPKYv2K715G8Shfxddy5A6dY5Rne1TWYL5tx9HJFZdfD8uCyR2RVepDR2eJ5buzrKAaT7Tcsi",
  "key32": "3PqJNf8W43tTxihfX9hi9NazQ6mr653PTM55qJdV1wXya9LWPLhPyUKRnhv7PvvjR7uQ8jeB8nsDhMcq1BNRXAHV",
  "key33": "2CtkT9JyNaGmix8AdoufzL9P8zdbxvxFZVNNGDJwFZShsruQVvUDPn7Ww2HsQwvZduPJiLfYzeeLPu9eqzd7k2CY",
  "key34": "44iEDjKSJyE5SFJ1aHKH6Vmw4EvXCd7pz7wiwJxGMcUYacW78arX9wmehwut9ByYFcXZhzGk1SkLzZEZNiqK1ujt",
  "key35": "5L42SqHEwE8K7dXRjZE1VDEuSViGEUMCxG4Z9q6xhgxir6fVnQt3fHJm6vN7j1BjBoZYdGyDzZwvmGZHAwJpaZYs",
  "key36": "NSc9aYUxfEpypxCnHTW6YWX4rmkAtGV5YvqnKueKST8mNHzBQ7Yu9x7XncVRUKz3cZLbeX1uC7pSUuqR3XKuzoD",
  "key37": "o9iqGf5UurVxhVsk9u6qdmXVuRSJ2Vtu8NbCmx92FE4qzMxx9Xt4b3doRtyJsqMDfhwRvc87N1vfRuvC5NZeyno",
  "key38": "39YqwdLAA7W299bYPe9AFK6Nm1FQWhsJEQnQcfrG24DHyc14u7c2QxtkJKx6rTpJyddUS1p3qpowFBLuqcJtjHU",
  "key39": "3VA7CECh6ZC3Fc95i9Axj8rUqjBHhYtwneXJrj1fN6TBAbvumUEmQeo3GRUChddxRAdr1tnqyvhou3LoMVBmViHt",
  "key40": "5EjAR6dFKsBv4CFdppfRGBrgHGsnNGjoE6NFqwimn4pT3q61k9XCSRJE4WRwuMum5Qwe79MC2YvRLNBc6MEu7wrn",
  "key41": "3f4hyD6gYA6vkNTynZzEYFgrwSzLept2guryNY1ZeRBsdoJZaXALcQqLuHMkpZeTqXE4XUpsRXpvsoDWV6tRbjiN",
  "key42": "5P1hNKUSSkcy98m3NWbdCW6rTXJnYii21e1PuvKku1oTwbMck38XvKqY7LEnmhjtNPwA2mJ5a7FGCfrC2gtmAowf",
  "key43": "3G143dWZnGkF1hh6kBm1oN4pnUjufdpUFidK8ivuhiwiqJSa68pRFzxZHbPhd9ZaNnx6pdukDUsKErf7hj12NXRE",
  "key44": "4goDqXTUUGpKwsCqS9dDtzPC6a6u1LrYrNckHFSLzFFsPf7L5av3J3wsMW8zf588ZgkfAsVLmVuUYRphVBHVVU3b",
  "key45": "3D4uiQHJt6WcoBp8ERpKQCseCfHzvUBYUUHy9dBUnqBjhVPn9EYd3sDz8EbQARQzYAW5RvXdK4Ng8tY4QbfUxTXC",
  "key46": "5RJsbdxt4Ek5RU3xB2PzssLz5nwodCXUab4RbvRsgiLdFgGJJLoswsow7ogER5uEXk1bhXaCPPd1mr8xJmbxz8Ho",
  "key47": "25fbKB9LBqRDJ1hTUhAL9D1pwKy2tWWs6mHvrymjFDP6C1T4xRYPeSCxoZdSdeoXTfrfi15JhQs7mUcWhv3EFCzi"
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
