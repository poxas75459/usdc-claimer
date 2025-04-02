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
    "xmnmqjFTwz61c4kkVZ6EYSpuUtuQRDtdHWe4NS4LPeZHFqaW8ZE1Z6gfhfoL8DbdMooKmynpYfhNaKt9egWXg3S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36HJpTULbdV9dVhWbAFjNdi5TLy2KCZSErCMxGhUBvrVnuLz7LCx6HhN2PqfTdG6Vqd1wSUa5J14WGyy7wKpi4kw",
  "key1": "3JRZNJ9ksxoUiHRVRPkGY8MLtvqvxcgXWNp3w6MKwfjCpnuxjrwk8KV9Ybku4G4yNpx4BQrnkZ2deQ9AQdFvruL2",
  "key2": "2mN6XrQnQrLUUJkeaKLVKc56ep97AvVRvcq68ksCfEKFyB4yRdm3hJxSuHENHMf35Wo88EHMM7kYPwcBssN1Apyo",
  "key3": "37vdFqQfx1MxnDEeoBin4vfComJpELR8fVTMg5khaiu4t4xVb7pC24B1x5G1pmczin7MQazuUsDNYLPPRxkLidPC",
  "key4": "9qx6Qu8opDSdvB2w7JWLbahhZptBhzy3qDY9A8KKPW4K3Z2tBpc5KP1i1Nw8gK2QjC1z97tEJACiSN9MuX1UaBg",
  "key5": "3R9MRPhMs5DXF6hixnoHp6zMJ3RRGgEnRigFEaSkxhoBHNxSUbUpHhjBvhhUxc9oFgCJWyCbqPj4vVArBeiwqniN",
  "key6": "2gLAXTyC48f9bvG2PYK4PJzk7uEt99b8fQxJGP8aBwKD8i5T3VXBnVsvE8PV3dCTsjRxEop698XRtP5Ef15dJV7N",
  "key7": "kZyS561nFEnJ6r6gxdA5fk9fGEJy6KFHzB1FaHBn8VquyFKnhZxDNtkFDrkt2kJtq1io9Z9RxQp3fguwikkTAfT",
  "key8": "3oAs2GTLqJwsk34pmXSaKtYfudVr2JaPVeUd7RfopPoYsERu61iJZn7m78FN6TtbTVZSWt7DCHESEBg12MhLhy44",
  "key9": "2AxTbV7pLJioA9yaNt3brigSnpRTYejVWoGLkcDJ8JSkpjty9gAyF3H69tbiKrTFyUQbAcpkwMFK7KBZvpD1C7G2",
  "key10": "3utHg5uXgPUJG68Tmxowxbsk7QL4Dmf4AT5AY1LJAnWmuUpHUdUW1NoNL9UyhFYveQxWX37XTT35ioKcY36K9QKt",
  "key11": "5mX2AM9A4o2zVNX7UqSo97PGo84w4Dmd4B7MnXbkVE1BqxfDQkYq3DVSWt5JKf839rHAXGMMouzHEJVUvy9quE2d",
  "key12": "4xzvUws8QTR2xN4LmmwBVd1T18Zj1tBmp8GieYC5gPeNaSew5tAQnkNbDLKAMYaUFCeCxqwnmuVo8McgCEsTBhG9",
  "key13": "48jzeApk8yi28fYDG2dXC1m7GkomkzmPGCEn29p2Ah2WMvFEyeHL4zLvzcDEmaftj1SEADwbM2rHLg81sTd41qd3",
  "key14": "5ogTMSfyqdoDCWcCzY32xwi6vWfQBEheyS7JQUem76rEcXsNH2cV7Jd3EbWYJoNrsTJCrBfidWT61pnD5boFsBCK",
  "key15": "3Gdhq61qVrzatgBhe64F4T37vRf1Vz2BrXcWtqkcKZn46V5Vrm3MNycvye1bGs1P7tgh6idFVnouf9QxPP4LLmnS",
  "key16": "5QbkZi1okSt3Z6PfmhkRXTYht1fyg6Dpu1KYmACV4d6NQvoQoV18e4VNVgrHVdzomdx1Lau9kLoaGhNqUAHWWPBS",
  "key17": "4B5fpDp6tmM3gmAJHvWvuiUDFeAq13zrmP3GTwvawDpmmdSFBgQP79BTVAop3sLbynGMFMvtLEoNf96ud6e2nxaa",
  "key18": "TDrwUkV8rUgjxjNKMVu361QfTWM1fZhDwLUDkhoTPa3v4vaZLCfjiZVmkTWm2LrPK9hiVAKzxTPhe4ASEWxjtUt",
  "key19": "HMED5YuPQtgKDhY6QT3ZXS3kCknvuQGnrerWsQkPmbDpRZNiNJEFdJvYhTqxtDU5pzQJzkB1z5pkscDBNffCg76",
  "key20": "3BkWVGQrxWbVWW9aA7uqThXv3BY9fKKBnfmvzWCjev6EbHfRb7DUdCFKLqtHQY5giVUAz5G2vXMnDjX6HhgLQQwH",
  "key21": "2tiUeSq8vQ1KPfbBWgNiMpDUNzqmFdod4drMhyhuPDuDCxnPPreZ9C1yZyTXtSxm9aoEUR1eedzKVT2EpAymrtXo",
  "key22": "awdw727pGpJr7dzJQhicVdHN9jzEbDwhJWyAGGvcgqpkG3M3REFcpmS92CHDuQLPL69buU4cBSBtDBrnULnCoPf",
  "key23": "5ZAWBUeQQybFSTdcGYGMHd84zgLpjpdGfn9Khz6DG9E6LMAKdUCqgFMddfE96pRPtZTAaTf9mh5nciUwNHYzfdu3",
  "key24": "3M8AMP71opYGsrKGTmAbyWZuiHqB1pW2fW9c4STGtAjUjd1xEJ1mWTp57tvG9UstKakdMJVW2KHGjUqjFqi9MCJD",
  "key25": "267edS7SyYvpFkQBVA72nTJvZ9vD3nVp8ohusczb5LN8Z5PhB2JVCVFciJWqC8ymtQSGETTD9eJPXpceGjk8Gz7r",
  "key26": "2uAwL5gkxuS1WvxhiUxBBjwC1wZwHKiLjA2AN7r1VvucNGL7aGWyYuvoH1C26Reao9NiJyGrqEz6DffgrekMdxPy",
  "key27": "ePAuyze8kHBQtpiezdaTwqzein7dBuKBKcUnwr8V1ThofLomWtm88RZ1C7VNhqXpxyHf9EDdRTWcJZYuXwYNn4k",
  "key28": "jwYmYL3KoF4Bh2dSH8Z6qG4fJ65xpFajmF3gwxswdLmVCPCYzvFNWtT56HB5boQWqTkNSVNa92i128Jyw7tdvV2",
  "key29": "2HzcwRgXnG3KB3N2AWwLYzTkkfhRXodWmCBK4DELuSeedjGLWe6TSZrrFMuFbKfAhzXYEZy51sUsbCs9dZHpQgr1",
  "key30": "YYNd8NPA89EjrT7PfciDeTmSr39UUGPSx2e6KKoYcboKVxcv4p6D5C5LM5xwCSBYWGdN1TeWcinH9HeVgi2vvFx",
  "key31": "5bXEyYtKaG8mkHEBby1yXQButx9K8MV8JuWrNASYzn8HhiZYoH9Zzyur2ntTNvr7KCtn6F8jaiXWVti4biYE9XDy",
  "key32": "5NkvFJY7ZFMTda7HXSMvnSCHCAbz2ywdCm3drgBQNjLc3XUGRh86eeZUK1f3RG9YQanQjd49tXzRc1C39KFvN86m",
  "key33": "3Z8qCzLFXNdoEsrTr294ZD6rxNsGiGarR75mgWTLASfjQUBteWdZpSMRDEYyJiCrSfrR89Rme5v8XBbHYpbGDP27",
  "key34": "4NizbpmpKjrPc23CPMf9PeduEFi1Gtn6yhdiA1JAgeyx9Tbr7FTpNzHw4yWTuTh8Tb8SjG4L6gZT8D7Q3m53rveu",
  "key35": "31zJaQ3dqBqeKPD5K7gMXB4CW5buisvdQfKgHBVbsA3p6DKMa5sdFWTCv4yJkbkyZtWSp3nVbWNzUiMn2uE9AeW5",
  "key36": "2ygFBtFepeePdPcXnz1uA5iZr8kD39ViENKLsYcciQ8XcG6Y4X38bQhDmUNSeRaURpmoszgZNXYrGmcS9sXvgoJ",
  "key37": "3z4rihsYJ3ytryQkqDb5sQN38fS97v9UZVT6covbG1nmNWvq9LhzRmgj8nFswdyZaFJgRemiELuca125QHNZ6WfQ",
  "key38": "58uuW3dqbyhxTBR73yiBiiMX2wZqg8jSeod7fw3ZaBbMJUJXaHwYmL1Wc65rv7diNjqJyz7RdvowfemhToaTLGyM",
  "key39": "5xeNp8Royca3NkXUmeenGaaLsQnnggKJWZyCBTLhTfDXa3DNXBZqaxkhshicteB2T5ZQKh1GnRReL8scc2Vnu6D1",
  "key40": "x29pDpVDZs9XcFQYPyBj2Czoe6R9kiCFTkrnTx1Sm4BkLp57YUrrtSVBpzK9Ksu7JxTMfouEwJMjKpzC2eFzUUm",
  "key41": "rhjzR2nG8JAtSHmjzh3sEfYDBaaZrw8C48piGgMitFexQQwAViiaS4mSTJrh4yjLzEmykmHCSfTUwPCHJfyBv7X",
  "key42": "3QZgMpz9mvsb3Xi1u6T5dbSqdrvVuZBneJHwa9HCtZKjfUh8xoXZvCZ97BLuuXtrBfNM4uZQRXzb5Pyymc4nfbim",
  "key43": "4QriMaRJpSp8Z7VhdjfjLB2FrvEM5sCxDJZMVKjrkXhXFkZyDhjbdf5NR3grnVZFXLfGgNqp9Ysayvqu7eXMEYP7",
  "key44": "4LNXLjU14RYq6Tq1SZp7qqGDTaoU3cyMgZotaQdZydkye4fNkU3Yq3aapTLMdTv9NA3fhvR3eCX1D6HaAVmuG84Y"
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
