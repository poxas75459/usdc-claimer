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
    "5rxucQzo3ZXL1utKRUxyHQJeD5wJ9phZoxdW2hDAFoMinPNzSmDUJUKuLWyqUiJT17RsyYUnrgmd2rKnfkx8DP64"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cxZFCxZPc6cSQTJ6qLhj519DH2qqJLFT1vpZEuk6YvJSZnLMPavuTgvBbifrqz1dp2ZysBvVg8GbMuENECsRhta",
  "key1": "43ttNqKBmnE88qbvihHz6FALyWXjstiLgyNkZtrLmCJB3ftPJsGnoE7rpuTEkTPyo6ah8XrqogMrmn8Jd3ncKHox",
  "key2": "2oem1Jz9udwznRS2GwLPWCnwEqaYA1gDbqSeryaGdUfhoQgac5rCRBjDMLUKu13aCuQrZ7i3Uobh3XKTJEqvJfo6",
  "key3": "37dGNoJf9YrkX8eWReczJKDEyxW21wfMrnxKwanWd4HAPTmnKkeWQmquni9hpduQyrxws1MwPCP8UgBBouA3Vncq",
  "key4": "3PtrudYTs1U3D8tR7tkZLT4EW9kM3yvJm7WXTdLr9fbDX7xbMGA65CBRXfidxFdn9Dhmt7Q9mXbxBifrLs3o2J1H",
  "key5": "GjcmcGt7CvDkrcNJLqLdD9r6TpwuT3TCDSDXv4xyDjVDyKCUXUyhDrccZZs2afKSDd1LyfEWg2LKSQ47SRybmPM",
  "key6": "5jrcC7qvmUEBwbvWdrdrhm9G1CLgVQqHjqnBixMpiURkmGMPGUBzcsrgFz2gabWeQjCfeMSfjPFL6iZ4WT1yN69G",
  "key7": "2aBF2NGoed5R5ZXodfBMHoEgy2VZ6k9vipFWyEAJHAgzEs76mVmUfzHuyyfG67g1sTYGnE77U2761cATJgRgEncg",
  "key8": "2Z8kz9DgSg9y74JkxtC4kLgRA7i6zLtXza3An73FxWpKd8kRhAtWe25swXPsY4FwGsPNj7ZhctGRvcqnL9WsQbGH",
  "key9": "kiuhbiSbkk2Cxj589oz4VqV9Uhf1XF6rg4XvFVKucdYtvBrvdzdMZGwRR38t1rP3MZWtEet5MXWoPxSSPNvsNEz",
  "key10": "219LdgJ1SqENm2KNSFprWnEHqh4hoWNrW6TfLaSVB27dV555nUphbPuJXDrSE5Cb8b2W85TJbk6Gkc2Nbh4WH3Xx",
  "key11": "5pY9yTGvzPUqzJp9sNB2S7SCgp9V7Fk1S7vESSPF8sWzpj25eK7aDR43mjpUkDHSmX7hnSiRtbbj3YPn4DntE4Rh",
  "key12": "4bMGKX6AEZ9kVUNQWQE2abEvMm2sSFmTf45PKMz5xZDQvckLa6j1Nj5N3wkc1yNApuhrYB8Rugk1CFbcbZ3UKoKs",
  "key13": "5Z5u67BdCpprmrQsyPxerxizJBVmh5WiA8ogPhK63i1pgoJCnVc3qaZuVv3Lunq5y6HP1MXSDfKwAnqqKG6ZhwNM",
  "key14": "2M8S3tfBLiLUc4ZdLidToLtW5JWdubigtv6bTqkwgAkpT8JZfUrwuoDMn9NEjEBv9yR6aQBa8NV67YY5XpeHdch6",
  "key15": "5gJd3guspjZByoYRgWcWn8M367grFpFQHgp6WLnU46ZRVXV5V1rg8nacmj1TN5KWwzGUydadBTS4iDmzYDizoZ18",
  "key16": "2bkyqz7Xmzr9opgtdxhveR4JQdooRdcH93WC5vz8rAokhoZuA2XaVoeo4YMntnesd46HSnzDB49xvCjs35ad1iMa",
  "key17": "5jzrm9dSyPBgCDakwoZNsvG8LJG14x7DqKhXDJheG8zwzUj1xUbWpb6kpojqGb5hAs3n9UWTvuwrHBwZFoicsYdH",
  "key18": "4Wjf7ncQNivpME7WcME2cxWCa4w1zD4LeP6vuzZUKxwSfmy5G3Svr1Eps9mKAnM3q4LuZK8xCs7hYegC3JvBjdaR",
  "key19": "2zh9JkmDCoLZ6FVaPNsW527eZH3xF3V2iaGrYoK5wVqMpfUcNJuqPZbdVpqNvAi3oRfECEmNBo8JGirVJcgHV4S9",
  "key20": "1RuUxMCF5ugjHB5dFtc6RSnDETs2SrrpcCUdoM2nsVz14PELskxmc61X3i9zmQth8ubqb6nX3TfhJHd9xQHgGmz",
  "key21": "4Zz3HDkLQDjY7RRKqLZyJcBBMatEL9xrGAqS754YPL69ZPwPiyN3viiBMA1aZ3zuVQt6T4v3eyw5CHShjqJjwSXd",
  "key22": "3FPigVgbCK3VzX1FEYshynU3UxPwZbqxCBzqUcVRDfsBH1GkEEQS8vKkwjV5URUcMfNxMoHXYmUuYgw5pdVvFY2b",
  "key23": "4kaqJnP5nXQ5scp8Zidd5pJEU34rjTjDZfMEuA8aBbpdWiw4REVoemvFF8nxXzjXevrKf2JXwXQhCZ7BSKUXrp3N",
  "key24": "53pqobLqC6tZWxEyR77MLYHZFNz1DXXmc7LsYhciqYZrsLCKBGoSei69cxbBgSmBtWH1e53o3ZpiXmCYzcoHCxLF",
  "key25": "5XuPFrSzyvnnpJFbJbWeQdsZFUVH8fKChuLMpWGL4bLbufuts1Mb8VMp6LoPtrCUpTTLuETkD5vL8pvFAZy1Asyi",
  "key26": "63XJn8Bwvo12x1BTrTSzXmMxvTJJJoWNCKRL5nkSqDPfhJGdHLDrRVQWNTU5ajdPj154xAMKGRzZVHjmcVjE1gCj",
  "key27": "23SBFazZ5GpU7paoq3aSAY5VSX7Zp1rTG5yBi3MNTyPUYc5B5on4Q6ZDbXwRKA7poXLLeEL9mgtv2Nh4TaU75kKS",
  "key28": "je9L9rQDKodBZTgyDrHwUk7AGou1ofVshFAn9LVec5H8ncsnrX7S53wV8qXMvmz56Fwj3kEMZoeKph5xaaHVbZV",
  "key29": "4tAG4hH7o26MfwTLcijA8M5KYbLhAPEcWkKDpKVLmFDDtW62ryjxoRdqgSmDW7JYv1VbogGDEW7PYz32rcNYdCBt",
  "key30": "35VvR14vi8eoEj4KUPWyTiYUcGaHN8Sf2f2hLKN1XdbjeGNxRMomYxD4411w86wkGvZeC7hQi6Ka27fUhfct9MWD",
  "key31": "59ywYzjdD94s3yiuRpMrwLey76NH7vggzMo98XYPwz4TUPsvLzdSFQV57Fy5STh2rx45Az21MgTyu5JFoqPnQ3LP",
  "key32": "2mSYSfqoa6jDU7BR3kshfRr1WdW4Ak1ixDUHzovN89rPJ4oz8gFW92kgWHUNU8AAHRoASPNAzwsqtS193bcjmkDh",
  "key33": "5GAWD3p5jwEvAWDDEHLwFFdfYqQaSukYPoFGgpu5Q8si2YT8fHNsNpy5dwEBiKkh2Fu3m2bvoY3tmmvf8cLoxAyd",
  "key34": "38waGWZ8TUCcDVzDwrRJUF36cphQhNpVxmbwKRBmxg8pjvuZKwdGCB6CvRzwf7pbbrABunsqxa6pvhtgPu1TXcaX",
  "key35": "4qQ2ofFLhpFxhjVvPEWMPDHVuau3qrqSPjFskhqRTK8hULZEbd6atCKkC7f9q7o1zzBoh39otC2Et93s8n94We6n",
  "key36": "5XgjVPdKRbMa2UX45ouEqZ557Mfs8knT7WNoY59ZVhUFNPJCS39FMYTfZ3BZxG5E4qfz2PAgpjfSeCtayVDvM1hm",
  "key37": "4dSPbRhDRJt3ADzcDvgJ6Wqu1su4P73GW814mtADzGtZmd5VpJT5k6BXCqgHCcUKXGMn6sZf9LvHEJtjXN4Cdsqk",
  "key38": "2sq9qTWsVT77iMrEg6hxpxVeKVv6sT5pCKMYKW2jJPy8bEjRdXDicQVJXGsm4nR9RQCXacfh5FrdmHqv7qnNXnmv",
  "key39": "3Gs6VddJu1nieAEkuoxMXURkQuc2PZq4Lupvb5p3hmxZEabcijkUu1gcV5uhgppHHoE4KjKhzA8s6ovhAJdF7W6Y",
  "key40": "3swBRqtyKaHh9ZBkeptfuPYxFv2PWXhKwYSFowp1DEhrm7DuLbkTi34WEEC2RBSrCBx2zsKfpLZg1NmYKNYsxLbJ",
  "key41": "2YPj8MAkx47MdCcSorUGUnwsPfD9R8wk2uFGdugf9ow9vem9AC9EYEKbyC1oAUBk7aPVw8vVNxpYbW2hpkuL2M3A",
  "key42": "rLXEcBUoq5ejECmQWxpiuo4axP8b4H1W8vDRrD7xfvayVjMA4f5w7rfZwYncAd5AcpuRUAAB9vH6ABgTR89N53N",
  "key43": "2vXjvUZcFcVcmnoL8RVsQSq1UsAAL4sp6gfAviXUrokqx9g95vBkapsWVPCePtgRPpkiQ4xHiqE4ZwxswZi4yPXD",
  "key44": "p58T5VxDVSNQE2KhPjjKnwqSf5rTf16x6xDXMuTXWbQDfWGAXpFrS1AG9ZzPqjgWsdyKkGYsKtuGnMYmLD6F2c8",
  "key45": "4ktYdiFitVnPqstH7dFC16PsQrM356zKJA9qGQMcbxsjbz17pxUrD6unqeQmotA62bTNVKMDWvuBQgSN892H1KYB",
  "key46": "5NPjFf46n5HbxP7NgM3CcBktgy4XQAkVXCrBhumNqyZHHGBDRM8FTSmrjZWBwuNGGTiLyNf7sj565cqmYPQsCEWr",
  "key47": "24cGdX7EQfD9YGTCr3CUSRMTrEYEruERnsds7MjtoFcupa7JouawjeMuXRytcarxyh2FRkfAisnyZubF4um3pSVf"
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
