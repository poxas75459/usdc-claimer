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
    "7wy6Nua56NXXoTYQwJMWWNGqqfcAMJfL4agM9gP9dRvUxBXrv8CEDCWxrh8GB5wCfXki4kZAT8YjiXfhbDJVcbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PEYgQt2p3SFntpxjxHyYHFRxf84AwLNb3Qjvy7HpzWKFEBvjnnPSc5gr1QGchiNNCrGRQvHN4SVwfd8Dsn3sYjR",
  "key1": "2pY781Fxm9jpw1RQQXhyBCuUwjREntWpv9zsYwnjNS1MVaq2J4vdfYq2Cco5vx8EQY62xiyEnmHqBLxCPUAGmCUa",
  "key2": "594hMgQPhuq1zk3s13cEtE6hddn8S8AoCBM3GkwVjcvWK2vn1F3wsee8rzF3BcsUE2SKE9cFDXrPMF5bPF6RXAzc",
  "key3": "2ss1o5DXKL6AsjrN4CNP55aj1h1SDemASAC4XAETAum5MRch3U68tKxQy4WB53zUiP3Pueuq9CXHQ6EtzY9ESQ4q",
  "key4": "3d82kFv5ngH6UPLXZGM9woiMK8ZwhMS1RoopgbWs3FwfhhFpVErkj697M8DX9Y8FLZu2wDE1czDav5WKFEEpswXN",
  "key5": "NxEjPMTwSDzSd74c3EwXUSQNM1TneFPaa5XBWES1MrHoBPeekSczcysvavawMWGQT9VpAj6ijzMj4ZkicbEdgnh",
  "key6": "45ADycE1DhHTZnH3pMtB9HRfiX4wuEQD9Fc4ayDNDrqiympzMEohwiiQAiyMCDegsj7PAfkweCbzDUaPbC5eAJiM",
  "key7": "RjFWs1uzGXRAzN4Hj5YhSfoygieh61iRpzvXLjC7a9daVt83ZtkPoz8hb4HMNRzw5Rtf4cpkjrkPNHxyhPpfAUW",
  "key8": "8NArr1EKKB9SvKTzaUtgyttwKQPskEE2Kuu3PVckfY31jKoGejX4612J6mfbzGn7yPmhb1NsvxTteeArZBKQH7G",
  "key9": "iR2WkKJZFRiCqtmtcW5uZz49q1cLSS9AY8PWEWF9KBw8cQit7Lv6FRZDJwpQEEh6N6ve6UxwQrvDpjgMkbfRen7",
  "key10": "yz7RMyc4V7jFmb7LC9DcEKAhuRrDQ1uQwxsy7dKNTubwbg7q2rWSnU3zvZurfARroZ1Bb26zzQgpphzWUm22fsA",
  "key11": "bQjdxVjYw3vz9Nre6eBzYoyS46NThBAnL8Z92Yv5gXcWb1THoUpFmQxrHKijAq5fcfNh8398EgsMj8a3gDhXAjw",
  "key12": "3fuSdSbVB3itLkGEGVmXnTNZfjpTbAPyEmcrzvJJ8Cs8arXuQNCJftL3dS2FVuULqUHxueTDT9RmZZ53CTQTcXAM",
  "key13": "26Zw8GtxkGFxgtpUa1GiSYQLTRrfHoL39DgC4Wa7NRe1UoCuhWgPcWTJWKgpnW8a1njbwRujriLenwbfjLzTzqMi",
  "key14": "5amrGSjnx32esEi19KRupXtci2ZtrM5QsqmZ56HxVkahQr8KoSXEW2tKu94AiPgMuAbzkWfeEsbVAuBeLg9KRXiS",
  "key15": "24CkA2T7SDqbuE5nEVfycCRYZki1tskrbKS8DVof6C9tm3s11HL1Pt94K7KR9SAJJvnRg1QXMPtnVve9AJdHPnGF",
  "key16": "3Bbf7bnG7WP9DkAtD6kaXUAAAMtXquH93y7v2Vb6GxpZQA41dY1D8bEy2mxC3oA3TumGNxi9e68NQWCG45UuxpYB",
  "key17": "2b3oVbH4EQSy7EcB8rRHW74AsgTKA9wpKpwEqAPGAzJ9iphCFENBq4HsuPXfp12SkENan7Jup5TbfCEUG96cesx2",
  "key18": "3ZWeAz9SkrA26qmzdCpRypzqfDxLAozwgrJ7wM8zWbLSZGaUXsaZBn4et7MXuGsEoKGDL4mEc6wmMBEHqGTsn52u",
  "key19": "t76KjbfZJdisi45cLqj6TADq5B35qh9uWTNvApfGSjUCBEk5K1T9V9Q9c52u5sfSK4eM5Uh6tM1z5sQfDLQQxf9",
  "key20": "4qS5NygtMy2hfSDGegUcZSmLwbVnGpJwGegwmi8R49wshxghGEDEvoRniYU5n6VGbYdGeARJpR3Wq1qFNPENcCCG",
  "key21": "5dTi2R68Za2eMwdu4nDHV2fi29iDCs3D4aNHEArZDakZwrQAuYLUde4Ex4viHmKcG5hsvqTaTWQc6DkWJQehZdZ7",
  "key22": "H8Zykut5tdsxWnmxuntXsC6JNoE1TPWDu94fyqQGeRJc38J2r8poh7XGQpJ6B17D9MG8c25FA7bCvGRygv8oA52",
  "key23": "4SqQz1MCyQV6M4a46dMB6NTazZC2jNvT1dGzB5i2D5ohsBYkiG1gC2cUQqR1xuihfJLNtSU6RiaEuVRbyH66zFJK",
  "key24": "2Z3gjYKqTe6uyYHkvxBiQra667o3ay8uNom9HiTFtLDkc4hivhYbo3GToc4afnYrxrkZtn4qdhzhw1JzLgyeVDYt",
  "key25": "3GCwLNsECqFmnLu5Ajf38GNUx1QQim9JrieqyyCNMrKZmtQmdMWyave2MT58Kby4sRSx1K3Bn825fcf3CKPXjXvH",
  "key26": "3T2zuJLhrjiDoaH8RPv8whzC3GNM8tvm42TGPeHQvs1oNrxj9rPqAVCs7nBC8mGpZPYgf8AY8oH1XsaAjnLyqTvj",
  "key27": "3pmJDVr3TjmJMA1GpVwrB8npqMKeBDW9XvJrC7UTK4RULBQbTtGhgYEKXHXLE4BPrdJHdh4k397Y2iJbmEE4kBcZ",
  "key28": "43SpgRLu8CZcBuBjmsqEcdCge91Po9EiYLEFTVM1oxkx4bmLHWFcpEREh8NhGnHmCVdYDX4zFjmNaafYENCxtZ9d",
  "key29": "3JhAMAZDSMnnFFdVGd4gp9zfwdv5kxiLtfJsDfUNsG9j5XKLuErueao7ahinssq44hE96NwD57XkjotcJhp4PJ9o",
  "key30": "2B8jijXjUpL8t1MuouTcGArQjRMFqbKVxBLeYmLYeUvLDSi5XwPD4zCMNzBMG6pg4WGjN9Go9x6mtq1QdMHXQTx3",
  "key31": "4kBNiYuHoatuQZV9FNcMvvi3Ta9VC5fpgSMWQxd53tZbXsjUERw87RUtFsJz749PEB3ryPmzsKgTqGft2CshAsP8"
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
