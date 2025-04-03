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
    "4Tg5BZLtdakYCFX9odmSxqrRRoGHeV2wey4uxMXAqPwaiaJqfRjgUXN5j1uDpMVMiX6vALTJKCfDf4GYdnCkokgG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d26M4EGr12DJ9kDsDtuaDVkCTNEV7WDiTAHnU6boRamfMYgYaF1Tbt2a9uYXFqoSvwfCmeTZirX1nHvsPPF34XC",
  "key1": "MpiedvMHCTow4DZfvnXQC5odG3UgmP3boc5VxAUiSYhLqiQ8E32QEJXpBiKYBv6cRKUjkSszho4uRUxT72doZNB",
  "key2": "2VcH6tDWY6Vs2rnXxBkEceWvy2H4iRfgqJHsooYATtgwFjXkv35pDEmqsz9ynRf3VX4q22gvhY5bMg9kh8sHJayH",
  "key3": "2KgZt6rfmGFkvMLrWChmPZ9N5GDSDkMadWsZeb3BadixBFFiDobjKyXppYFbsgAgmMynFGRobP3MHoTZnFF6Tp1F",
  "key4": "4HQGrq1tV5u7uDZRXgRZwNxCpuHU5Dj8t2Lh1aZ6qSvMeVPG5NSTcLW8aELKCj4tWUWHpxcXMME396PMGhoNvWF5",
  "key5": "4Vb754Q3133dFbNhEDQQ3LqFg6GXt62SqzYzrSPQiySf2ZGZVVMV3S8Vss4UdodQFyU8dtraawckHvs8PaKaYPwT",
  "key6": "3BKiF23xUVaKbzYgjZW5ZobfMT3yHD2W6w9e5rao3cbbAn8Y5wo71wPRU1NiBChtkP1i71aR2WuxsPyjpLCoWbaV",
  "key7": "2HMMiR8D5Mdc2QonroH6hoANpAzLZCQC4KtEKwGECb5Xg9mcmvaj7fWWHchX8JwZDQWN9Jy6YDNBgUHFPiJZMTXV",
  "key8": "4bz7tTtSDCvHKbjzhSxtF2qVMH7vobrB9Y9E3Jn7dUHAHkykCajZDqDc2CzVUCThgaCCumxJHRpsuFCdHVc9QhGK",
  "key9": "4ZJaruuJkCQhPzBiKBb2mJsE5utEGBy1K9tgYj7MbRE7R9bdP4SKoy14VcBo3gUkEssQ3tzq7pioeVJPtwNnDAKf",
  "key10": "34DYa61by2GrAukgmX2exNngHTeQ2dfJw26u3VXSet5YZa5aY8rXM5UEwTmpecrff2WHicKmUb46dcxzSs8Go6bb",
  "key11": "2RurFHTS1E2AsvVQrerrrERA5oGthwE5r4VVRndmBHvKsBEXG2MnAMpCKW5ytXn2x3uFwwdgwx54oMvvSoYZiFqN",
  "key12": "5ADs5ZPEL8BPrym313qp8jMoiuc9f2MKDLWAWMZvQ3ii1FRkfbaiEkwLd1kRuEyQUGy6oGKaJdMkCszqB7rujBCg",
  "key13": "5zdxDAmFwRRxkXEXCebAirABmrtQCgqiz6K8wpyx37TftSm8ycjSzDEQdpyZc8tikFry5qK9TgJaXySUwB27r4KT",
  "key14": "3bkG1DpZognMBp4iNp5uDLdhdNBjyiYxFbvioURpHbchKXqbxwEZNmoSoCFUfn7Sa5EHzvgvo4uTB1rswtCFiGXx",
  "key15": "fb3S39rvgvD1Tvf3suuJvndEB83mZVu1bBRafuLPuSQfjRth1EykDxSA2ZNPExSpzdZXGxCp6ZwdvaiZruJjhAj",
  "key16": "AsADWvjjS34xmMXyMmGXMZo4kBDBJQpwejh3BBprZeYn3disJiGByehm2CMRnPTukCPpy9r8qgHCQ1LhK2SRbGN",
  "key17": "5jLivZuzZk3jaxp5hpEUDMYUToQkDz8NaoWKL9LQp91bAvPCcgHhyPY9iq5NGXQ8mUrBBgbhPe4QQCfWpos9yh4m",
  "key18": "5fbjmL7HvKpo3whe3D9i6zwU5EiTK4mFaJLtjYBbYFDHQaN4yjMd8Z1B3VryZwuw3eQz6CCVo5KAPiPsTj8uHCUt",
  "key19": "ifZUkbMEQk9ojXNZDEY5Wqep2NjwZcQcYcHFCUFe5QqETRATwksX3gWPT1VuB1JjmFy4YX5LLUwbYL2tMZY2qaD",
  "key20": "2mobQvGAEG4syd5D3e5bjh4VAtpdAvLgqKeUz3JuPJbqKPCY7GZnREgxqx4B5kVTF2FTGH6du38NY5aXXf8jb5HE",
  "key21": "4wX3rD94QKfqW4fovKt1HRiNuc8WpkkKnkuYCznEjUCaNuWPGLTtJEGWeT6djVeYCoD4f8vaGCBmW5b5C5MBcpRm",
  "key22": "4wMNqQJpbJjKZdaGv15414stTTx4q9zYwEKf3uRiJ7ucW2VANj5z43Kkko4t8PD9byLtGfxaLB43hKD73L58UN7C",
  "key23": "z94swSvVgw7mTPh2kgXCiiA4sCJvRH7PJpr4TGsNqE5jzaKhTCdXA5P9VrCBfLiRnT2hi21PttMVhCvSpY7hS3m",
  "key24": "5wRPD5vRaKkBcr7krLG2ix7RgwnKv68c4U6Svf7b6NtzLcdhUXyDWw9ZzDLJ8tQTP4AzxBbdSFCS2gBnsvac62fo",
  "key25": "3aastCXDVXkG3BAAt7ck4hpUrv65Cnm4wQz5N9D7QirmsYeKJvuCJFtzstNgjBeUk7qzj7YLrDsGwo7a7tPFTbc3"
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
