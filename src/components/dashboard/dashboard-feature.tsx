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
    "2YBxKxi6cMvWtCnnAUcz4SVVqyrAgnAMvLAKcpyeitLGd1hwCCf5HFJXi73gG6RS4EUNWWo3gPucDXVRfctLr6aC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MZ5ean7grAXVoigMPAGfVVjAS5Ci6vgiwsLigZ8TMSQNgtgrG68s4DyoGXDQ4ji95wRHRPkun9fqbgtGqmjVTbX",
  "key1": "4LJoUAxAAeLT8MJYsk1YgFkyf539ojNSX5yEEW52tRXRi8QMyRmrGiVTfdoJnucLrLFn1idFxzVQD8fDCsaLeNep",
  "key2": "4CD24LZgQozorWfo9JLkZXMBnUQty8yPT7cSRfSLCh592YR8MGSMcdgrHWtkJ3dVN84mBYSVY5AbmRRzJszdELKw",
  "key3": "2EnUVds2JLzRFvD6WYSNpCE2pAdEDd86vQAPmDxF9k5H9ArsTgs4PFS9EFz82w4YHPckFd6LBieQ7GbAVAoeDWPc",
  "key4": "58w6fPqWJ9Za4fJEFr5HMnyG1zcA2z7MKBamJxGQyYzRchKLSYynix32PW6mXzqPoARxf646df3dMUjLFiXcPXoG",
  "key5": "2GcQe1scBYcn64uwM2ANQf3E9LU5jX3hEU3mcUhMwuefREZxGtPRTNQC349QLSSVF2QBF4KjvueG5umQjN4K9zzb",
  "key6": "5SpCRLbXXLK5jE4TrAoiZXfsCdCW9kUqWyR7EUzeuEDXEsnJGRzwb4XXC3VThxvnzu78dFvShbwYmxyKopfbGEVi",
  "key7": "2w3UoByLJj7LHTcbYZoKJwtkmGQds21QDLkYHJrPshEdSqDx2f888DMmbybkLkyRL7VBbNARax6ziASuoyt9HWWQ",
  "key8": "34957SwJRh47363gmg3vECdSqhceiZtHdsvqc9Xu5MDi96MKavBaXRTinaAo7RgwSH7njkWCgZHVKAS2NW94miUi",
  "key9": "29SPMSEjGpbD8fwM7dn2b7LPdgCznkT6UrLsR5GhnBUajBjY8QSqPaMTdt2NocpZSpRCB8n5MAvSp5sQm1vUWBaq",
  "key10": "3A9vCQ5RtDSZe4kmGYFAaP98CoKdfurA8XNvfp5ghyzXAUqyBH3TLuuYe2VscYtwfb4xrcq6MvGJRK148mhyJDV2",
  "key11": "PeqVywoCdpYjNtS2ubDiprBrwL5z5YJKWEVe8TUjwT1gYsUwHJZdfpKtrccHXV7VN41uMbhr4zs3WwFme19LHjt",
  "key12": "DdeL95WiLy2tJJqUs9rpG5Rwi4Xdtg6Z4bCR5FqbuxetcTy33u4T4Fm9Y9N8FGHVR6a3edJsdXoMrLyykum3zcQ",
  "key13": "27x634kQ3xv4QQ5zz3LYYuPonaM8vFaWC2CRYnG3GXmFp84gZSSvPdmiVmNSGVQDrZv4sv1Gh3n7exX9TprNkXdg",
  "key14": "BzUbcAGQYsudUbZp16nNdBk4JG4P6sUNK9KghyY3BUvySRbtX2nh1bmCerTWSFKVyCkZiLPQed6ysssfcCL5Zgs",
  "key15": "4fQitug1tuYupbmX2N2wb4sXkJvAqET3VvU79Ai2ztjNNfGKXapVkqgqMkhmcdDvm3g95LYnaLSuFi2RJkvWB7cf",
  "key16": "rULruw6sCEDRW4roch8dHfoozQwniZVF7eMAqtuM5mrytUpVrQrB8Qo5zmezH9uvqCPYuvw6o9yr7jCDBobtukW",
  "key17": "4NcDHQ9oJWNE2J8JnQJMTES3oZ9uc2nqKx9ekeWU8oEmSu3Lp5bQMT5Li6Lsrhbwxvxj3w4LrgwgivRjEEKXULKg",
  "key18": "32Kx7iztUUQ7W471JqUh58EsGBvSpnyghPKi57xzchv88s6GS46zJpwBQTpCnGTu8etvoSD92ekWzYST5p7PDCCf",
  "key19": "4mjPpQG13gT3pparMLMtCq6iGrkGFrgNb1baBu7NksJmLAYfmAMMbjaVo9bgBjQ5z9wMP4MMN5YHCrXkEhQwfW8R",
  "key20": "5p3rjcJxy1WJ3xB5szx4QkCHEdWz4PYsUzrW9Y8t4XZJzmKMYgy8mv3qFnoKwrzZSVybiStzskm2FSSdcwjNACCv",
  "key21": "2xPvm6k8PZQL3JyChM4yDn7HxXnRmJn5BrH7azMGGFCh2R6vjLHa3T8BwUKr5D1c7UTLUWBGcc8MLQed9cg6kXCd",
  "key22": "42fm8dQdY8qQJmRdAFu6cstHfAm5HowGBZJ85MNo8dpzWezpJSb9yvS166d2hd44WSh3zQZerr3gjiksFBJbtGUp",
  "key23": "4WiE6fxSYkuu85MAoRo9xHobB9AhULMF48DYT9GScq6aHHZwMFFcSoUuMe6286k56PezLmcPqHca8BeiVyuUCMbh",
  "key24": "3gCZRwnUB6LUDxLCBjHxX2oKF9mSy7iuWYifgFpRyao35PzfqDdhNU9Jk5nKRk2qdrf8qB9XmTQWTCT2Xx6SEam8",
  "key25": "26xXTSpadwsDeKFTZSWqzzeCizT457iYBisvXUM9HGDsxay2WZecHgXLQGPFuGx4yqZu6q6s7ZKp7sDXwyJrU1Z5",
  "key26": "2i1fekCnqmxW11PcZcW6XaGPNDSnMaRnr1hNb3mnphzakQXTBywrmdBbYKRJU7eX3K8a9GcinFeDjE7iF7a5h4QD",
  "key27": "5BPoKFAgj1xgMaMFFWHZinArUnYLuHoMCLqLKCytH2gzFxfGTG8Qh3FUD5kg4fe9aFKhDZS8869wXykA3titHAZ6",
  "key28": "2ib8PimuZP9YQKVmm3uHoUwkR2opUawM6zXtySZ8uMFiE24Fq1hFV6VmVR98nh5GQXKNj21SSKznKtQgFcXthMsV",
  "key29": "2hrub6jQpvaEdhRWJRJWbADGfd59HH4dwCq3MAQXceTgRgkD8VVrDHSQFCkvZJHGR7W6NQJdD8rdH1yTKW5o5rgx",
  "key30": "3QWVQxfRbMbPMikfjGqf4Kw4RbbAfFL74XzbzS2cQGsNwqsv8bv7NaKQXawL9BZagMmpffXXxX3L7ACGZEVB4oWb"
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
