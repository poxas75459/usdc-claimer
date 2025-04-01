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
    "5jZazUAyXRKZJ5QSQczsx8YgEGY6nptBzK4CG6WoSEGeHixxSaADJqeLFXcDpNhgenPAtK1yv7Srg8FLsxjJ4mhd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vrWuZtttU9v6Y4JiCspnzWvUYpqjAuMAPHrhinuv3RWAjL7TjHfXDNfcs5CZrGyomGzGreXDbkgfJwT8Ruydv3y",
  "key1": "47QH1e2mMVieFuQzqwePn9hfHMuwZpGW6VcXB31F192D2EF8ffs56fk3Zg5sbWAA4QEapZBvNkr2tvytxdFGUYhE",
  "key2": "StRqhzEAe73TNe94cWmSURXdbkrBL93p8aPgSYdMDsbG6SqvBhGaBrfER7SXJdmH8RDekSDKffeR7FYfCE9ssiT",
  "key3": "38uUVEwX18ARYwBDX8h3UYLD35HSgVDRf26aJVqn3dXEmMmJdmTvQvTjye5zvwp4idy5X4dDU7k5HYSHKe3nvDnZ",
  "key4": "5UZ9fxPRBZkLAjHGoQaGr4ZwPGeAqeB6ne4AU9t1W7fDSx7yYXesEqfgKvuvy6QCksu96Aq1tQfnqjMnKmzK5Z8w",
  "key5": "3LpmJbpPrkEtGVeLski26KPh3MLSxVg1gb3vWx7CZJyf8CdJxF6ZPNEZB1Us3eNWnDrETBSzcw79Xj2tvfE7UBAo",
  "key6": "2FdZS4undkLBxQ4DN9m3bzbnpy16g7VmMqda5cmiAFk1v8sGwDMJNuG2Br33WfPmRLwj5CQo4trzUU4VhMhoRMsW",
  "key7": "272Xxcxr7GWJXjD2fTBSPzP5c5p5BHYbDMDYu2Lnr9eKCdk1JaAFTFMiKYHXt9CGYH3odVZQobnea2xRFwBZW89p",
  "key8": "Yvnvho6DPAq6jP6SkXYWnb5XterXd9nh2A8w757bZzNa9s8VBk4jkf16f2PtypA3u44AdYZgeDkWaH2Sto7zpJp",
  "key9": "ccDJuhnQ8M8Vw3jXRd1ThYkxpyL3uFBvc3VAs4VG53NaY8RdGcmEWr1zwCmgLLeAM1k9Kc3TxrRNruHZ6qjTF3F",
  "key10": "vzqE2Lqd9pXMiWwVbZZW5DoCHjXZ7HCUW8pLoBxkGPdUFcnnKTJYn4XEsCa97pLR6MzF3w4ZRivFUASURemNUPe",
  "key11": "4nL2U2YPuWxcP9VZwfsqFy3BPjsfEdKQ4kuc84XuLdZq8fvx6Z6PPo9xgrY9BHbm5nKxk2rz1bDGGo5RXXCcmQcf",
  "key12": "2ZMrnsyUWDCyksoicA76R1Wgb6fGvymG1jApTru4eP2wtihzv34GJZs93CmXuQyc5tjESSe8PyZQMctdfh68jNMu",
  "key13": "5atJtKtMH39SGRLkQYhd1VX2FoFfc2EDJbo1SQi75FAdZzt85x1FHUe5ZRxa7f5pQT74HHMsCp9DRWobPYXRBrWo",
  "key14": "2ukDtNBxbmkXcfZYC8cnN9vxp3MxKfzy5DQMeyS1aqW2ioMwTbTRi7kMa5ovSUjnHgrDArhqKYKykN1Cg8vmZuWF",
  "key15": "4Q2SRCWurgECtXFaqYtS5HnbH5zhoJas7BdX4mTKmFExQPFxaUJqipcMeKYGwRU75ktTd5C4JcLzCJpmKJFdvdpR",
  "key16": "2Nt96pKrJoqV4dtLf5W5txcCdoRsJaJFxdjDjfFVEHVG2paWDvXa3zNsEUsqUhXsx4gxhoTqFz1d3YgXRmJQSTtB",
  "key17": "2RgcMseWqhbWSCQtCRnbjmA3no2gA5PNCoe94bqc44ArPHuGFTgWXJ3d6GdRUMPYuhGYqFJPDbQRixaM1ZzfeaYA",
  "key18": "2UP1SpnztUbUE77BbUvhqo1k77pm1xA9TnSi9fbHruHXkHkSPUTc4iRCEzVFAkemkS6mE7TTt6fMarpTtBhDCFqV",
  "key19": "2VuQH9dVSGCdsH5a5337dUbWUcGciAmcqJauFMWAqbDnfS6BNivZne4TmyrEP8zbxRFTZw4oNjTJ7pW1F1A7WQbw",
  "key20": "AVfaDg3dA8WrvrytBJfrXdqVGA1Y13SHEVqAez1J1MiEW3e5M6uw9tTL4gmxCtAosvp2r9Zq3JzfgozzXUn9kdf",
  "key21": "PAVdcTB9jo7XZYX5ajqW4i26gM24XhnPddVaCBmUU1HkbCZTwJb5FUznZj9zzFqCXWJe8adTmvTgtX963tMfkSA",
  "key22": "59AUwohSPWGruSYnNyyRJd9sn22Dmg6WrfCCuChSptcRFvVVVeCMwsoSNitjJTkheTxcvDTX7qsQt994jseP2r9k",
  "key23": "54mqTb8XqntsJeTZxRgmHPaSNf4Mhj7c6PXGGK13GNBkJVkwVcfyi6JTs7F2TyaDuGpm9zcFvSGgmNmiNBQszRfx",
  "key24": "4LKxE3rT3v7sKnaAARa7qfpPGm28dygYhRhHZQPomqGFMJFt3Um6stxVsFgwq9dTFwitDoD2AXkbB6X33wA8EJc2",
  "key25": "2Ksb167nWGLT74gxdkrrBGASrhPhGqxAN2vDC1G91iDeYfeLMVwBF4RiG9z5F6tPfrh9yK9XDLMzmVnE82yq9jic",
  "key26": "61fNf8FxuCgqCQwLHvNCKcYb9nLw38mp2BdFcnMpPb7vSzUHSp6Dda3y3jitChipK3ZDJNtEiKmWBVCMNvQ1MZtF",
  "key27": "29HpHFrGbuEKnibctknSFnieYuAi491P756uNvf4KWJSSyjiLBThaUZ5uBxqUaLchNLFuP1ucyHiBxr87VbKENHx",
  "key28": "29a4sa2H6pd2xdVnL1ZopcZ7gwHWMTtSNTPtf3e7DYLECAD5L4Tqirzjv1xDdUVEkUeduQ3GPt3nNBssB2Uu12uq",
  "key29": "3wACmBzcGCrkFMSAzthCWdKqivZQQPUVqng6fxcezhTjUQoLkfHV4dycosNWHFHYe781SDTtUjKEx24dPXVHq91P",
  "key30": "2fdcF41jra6kYZd1YYtKgnNhMRLns4K35GhwZaHy4gqFuFdvRdTmpDYmxb3kba1ZRMfM5MiGXf5a9LAofgWdNVU6",
  "key31": "RBspFsHbM12NrDkUfnQ8BPU72vEuufBKx3Nyu2NekM9GpfzYPKP7nuL35TNAv8Pg1Ao679zgqLPc3C5NQudHVP3",
  "key32": "5Q8YjFEhZnawtrzVDCJ74YCA1J4YR3iuXfURe83nfpdvxozmHQ232v8AmT2hjyBWyAbpbxkfiEVXEo4NNZhxtryF",
  "key33": "2Gej3Ab2haQBJ5BRXvKxD3AaaeFScTqDzBMqgC6YViKefSAv5mxW9Lqvrz5evyUHHQngYjB2eAd1SE7Kgn7pSeNc",
  "key34": "2vk9ekpNckxdZ3XJKWZ2gvh8YeeMqqSjodSPTiLRdmj4cStWgAnVssSXLN14X8XXjWY1nhxJpaEHu5xRXbfUorT",
  "key35": "3MDtjBunMLvRFRxH2iDxpHFTDHHmG2DL8jkJcWnaG5dsZTvoY1DDtvEJ6JswErwxkGQ1eJHkwdobHqMRtjaseeqv",
  "key36": "4veHg6vVzvbKhPF2nU9XNHv9WUmukmASKaHdUPT4AxW9KZJjD8bWaztL2r7v3ou1N5iq7TxAaKxgQqyUBjgd4VUq",
  "key37": "5z95pwnfbChXkaY6FHfFugdgQmGtBTiFEUQgH5xaivGGzDo1jv2GQDqjkyTfndhgVDsZgj5uy8ap9Y1gv8VFc5km",
  "key38": "52uD9Xn8VEHZpsGV9hYsEe42o4XDXzPpafxDm58z7KtcaN3xrVPi5E1wLn6Y2tcGHNRLPHZhAJ559g1KiydokjRc"
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
