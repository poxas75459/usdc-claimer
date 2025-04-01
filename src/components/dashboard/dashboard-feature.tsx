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
    "49b9iqDtEQtA8MAUGK9wzS5hx5vXLGNCkRbMRR1wYJNGbAGzFzsd3h6kZiFzeAW78cGNsdENDERo68FFTFW2tKbB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yFMVf6CzZ6QqGaM1xwyfWugx5GEkW9473LFLFZzeyY4Qdds8rAtUXxgV4bqLzY9dFyq4yA6SiwoT6qPBvgNwpKN",
  "key1": "4dx7XJTnk1RD5UC9CTh3DwLWka14DvBcncEhtXF8hzYSkp2vvjS5KPtFKj4aR2hxTdR5mBGkAr6X5rZqKbq8iM1s",
  "key2": "3tDVihDGiqGTwHbpPTSWhuALhXq9uCxrytYTGFqhUiMWskvQYpRyM1UbJDuADKhuXaZ4egfqLbUxtwiHyZgWucG1",
  "key3": "2n3pV1dz3mTvnXRNM49SSoBQG4ARSC1fGVDYidiHGNfeKUqzcU94FNHv7fCC3hc9CGtUZLjTDLDpoPp4BH3Bre3i",
  "key4": "4F8Q3XrmLn8MTNfJpR8Vb8WPQ2FMa8WseZcmG154tBPcYfda7uSAY8sCznq6hKMWkvYCqX4FQAMxjH45nGfoXtW4",
  "key5": "3DdQxdJjBGMaN9mQjYs4UGP34JceC1AS7Brdvyeeqv3kzZ2gL7Tkv8sjLiGpm2xE2tuweeipy72wxXpD2u9jimsL",
  "key6": "NENAtP51zDq1CG4fKRzkDrY8qMsBqfA4rXLdBQh14rAnTnictSr3rEg1c7sDRNQ8acjawPewKms2sLCs5EspB5n",
  "key7": "2QMCrz2sLFJX68xvyNxzLfxxzucNwV8H13jLEt5dckf2bYsGLne4yaGGg6S6wQrHHsbAnTWJGChU5JDScnEfTc4s",
  "key8": "4o7azNvGe3boHqLF7KZe86S1RFhVACcsX9asUxTnxCe9dKybHGJNrDoiARYxkNPehJciSDyfpXokGfHEDRNzWYrH",
  "key9": "47gnFbSDjT7XHs92xXP43WmMBz4BSXjiS35D1Fy8ULyxgv6XGUjDuyYHVHXEhfirwwxWQGtRJ6Va4k4U9RRGvyX4",
  "key10": "bMDGy45oQurTT61fguMCUZxuBQUx3nsnS5ptsSZNDDnt4LFttCwXPWVmMMVPF7P89G1GQnf5G69Ruz6xSuxpVLd",
  "key11": "GPWb9N6VTiNNWD5cQPsiBFxpiB1tFRtRNXq1a5T7BowHYe2FZ4tFDTKuPFcXW78sa6MhBq6C2G2PbCdCv8EV4ra",
  "key12": "3cruzLuR9BSRACTo9gHCmEkczxiAKAoNsFbRGSB5U1eiXFvRj3tCSEgmDQpvnGJnwaoZARXD9SHy9Wkpc8dGQXoo",
  "key13": "2f2WrsTD1Rmq15f9parocvuexYmaXSQ6KiGqE6X5Bew7yHbHK1iM2wYzHC83y9AbBAUg8scNgh6fkcoDYSdLPaVW",
  "key14": "25vk6v1YCpUEJcb9XoT8RAvmdEAMxuadWmZkw9GzLm2VRimhsgV4JX2gLyBbmGS2DYVwytzE3SMrzmwXLrQkQ3JG",
  "key15": "4MafbhN65VLU2jEdeNq5yRh14gdPQuMWwfyDpCb49o9oSG3Qav3Rwr8Za8QUkHyfQHN8RYZaFYrNg6KqoJG3ufnL",
  "key16": "5vx9JDTJdDjCQ3aG5CDtRFAHt1s9sLLtG5sh7c2Ls9WWUxCFfQAGMyb33fa7CnerLZ1VzsHEPSX5tJukLyZJCXF6",
  "key17": "5pqCBWu3FyPtdZEF5ctmZCSrrZzMLWpKkwySw4kHL31BxVKNeUvCyx7PWFr6Y5GGJm3fzEMxeBuoMrdJxt7wTW5y",
  "key18": "3ErjdL8wQAZ65oK7Vdpjk2yBDuTRpMytZUQ2aVB6sPeKrpCPjgX7ajYLfmDakSdDw2BWMqf6jbonTN59e5TG7cv8",
  "key19": "3j7ucNGSk6aDfLTSCvZ2SjNCU7MNhM8TBUJCq39WGGH9VQimmsjZhRFnjEykUtuQAYDWdR26B2VfedpFFTYCugkD",
  "key20": "43akCxw4muWHWqwac5UUbRsLCSggviuwr49PgQ8EonJFSFCswRK8SqjJH6b6sY3wCHKVXkQHg63dpRy2DE94AFG2",
  "key21": "RkYmPJgxjLgvEwEeRdjnvWcoL6fhc5GfUzXJBhm982XCcn7TbWNeHR2gUWpnWAC7HFJ73dgMqBiNg7RziF1xMk2",
  "key22": "48ps8wmHrM9GUFeXFdx27vDHqnKrZkbvsxWSKWPQLXSftngy7twqKCrSxuEX2xsHk9tbttdDuDY9eE8orMqDaAK",
  "key23": "2QLhcwQXKBQQjYWFhE1Ppfg9s1AWSTR9hcunaRmhrMrx2jtHdsgAswMrwcAD8VDk38tWXCSKqhDL6f75j7gFPyjk",
  "key24": "47WH3obNpr44jhtdSMjB7VDBep2JwGSK9NESx4LjNd9WohBM3Xsgr659EFfsJctw12DyFu8Ay11oR4dr6jNE4Vgz",
  "key25": "3d5DSNxMMN5uijLVAQhPhsGroyciDbRkMyVJswrdRs94TBC88UWMURuf37itQR5vAwEHkCNNLt1C8EEdJoKt7Vkq",
  "key26": "21tM8CpMQvQBXPsS11s1WvaiPMtLJ5oALntVD1PyYvWi8qUv7kWTt5hXvuSbHjj9eg9MJqsEYDap4kfJWjBqvV4q",
  "key27": "26PEh4NNco68QdEyo81gi257CFoVadA6DwYmPxWoMacCte8Ge4D4Z42VMHgrwtF3jMwRuyFA6ndWgfBmda9eWLZe",
  "key28": "5LHLrGagowtmLm3iLteFiZMBEV7nPnruF2mhh6y4GVY9f8iCvRDT3NagziQAsQp1Zah99mcqzYNPAf67wwj63fQF",
  "key29": "3Y4Eky9z4UyBhYdCSmR5yLbPy9js7iHVHBFo7VZ91TxXEAaoETVBmbkauFVLG32KCwwRZieK9zeYSkgfvZSr9mLS",
  "key30": "kAAvYEbpPp6iZHtGknLoNKMZcmCc9PyK9DrRx4pu4vJB7kuVdyX7esnE4CAR75MbWom748mtdDym7bYmxPwko9G",
  "key31": "3KwWjPDKicoTCvzQqp3QkEh7NRES9nuWnnn9rVEBebmsVaJirYhfqmkC5yyKkUdyJNXFVEkPjQc13WXWw8zmNQyk",
  "key32": "3a9exKahwdgKujC9yj3uYHD11B2nNZeKDoRx8PoaCmzhgBK252HnHCtgeCcNmWaF3UVXB6yxVDsXbFymqxXizrFL",
  "key33": "4dnGgoeRRN3whQ8xdR3dzmjApSm2wWNHVjjVUJejPH1zTzhLQtYTH4pTUYJGpNogT6krovjw4oxc5R2vg76JWC34",
  "key34": "FCogVgE5AHmMyMMpy3WG4hskFFH5GHkxJAFJPCrXRTcBqvQwe5YHAXfcNfddnas3Ai7kj7HTCsrcsPi9aauaarn",
  "key35": "4MrMQyFeLHwga5eYCYghai1sK22Ctq61wZvF82gKqZ3yGMxVpX8e3SftP4x6xMrXA1fKg3wxdN36aahopGfL5JPZ",
  "key36": "59n2RXNC5yfdG7RkV6C7jvNbPLdd4psjE4wN8XTL6YGRZw8LUSRBN8qgRcxEb9597oKPBJ1zhAVFDyf1dGx4dem",
  "key37": "5oLYsRscRtvijcAA5MhZK5fn5pen1HkEQQGvWJxYYo2GZXdJvRsETZFKoNi6LXMisrniMe5myen36QDkbCD1UFN7",
  "key38": "4wMerhJ8PvwkdxRCfc1Wk9yxY26UHRcy3ZoF7UFfSo7WXwJXmvHBB5JuUGn6G8NwAA5EyCLpw6YKscyMS3PetuhZ",
  "key39": "3GpDXKszVBTMfTesie4wo5BJfKrEXfYTEBorKfp9ePf49i4mMGyi4atxyHUGcNQejfpVfpaB29k97kYicoXc7aPd",
  "key40": "3VMU3D5BnhwAUC7PmwNmE4XPRkaeNmm3svtxiugysxNueCiL7HYcwhqeM6HgHUDif9qUzzCz5yU2Epu9UJDHZA2M",
  "key41": "3feVRizo1gJQdrsBPm2etsuXjYKrafKy4sfF4XJVzPzwkfjDZvTh8LViMPxFJdDpekNX8qqhY7SqQeV713bs3nnP",
  "key42": "2QG7HZH16Qj83U573uiwD8kNEHwXULTJLKkQ2b4QqXHoTNkeAWiFtuB5wSNvM4H4os3eFHAZWk7gZgXttjSCZpcb",
  "key43": "56vodNmrJm9XjuJuM6gXKGeYkvVJub4hg1sSkP2DQqQyagAkno2cGSk819yx2ynNwtMVwXVJt3jLzi9ELDugzrtx",
  "key44": "UPtJqntmyT3oBpEzF6NLkKx4ZMFYk68VMVsW2Hy4Hef4CM4zTe4oGAPrdKaM1aPACRiHVJaSCqd2W32y8SAJJdt",
  "key45": "2Nm3rhpyL934E9xu6wzvfDoy4obr61GS6fnFEGACgcVnf1Ho96WMCRFvuAYVZsfRcayoQnir1oNqTk2BH6e9YaYM"
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
