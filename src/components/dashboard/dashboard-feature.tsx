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
    "5CaVUDEvckeQB9Jfe8kYNnTA1wa3e7gHTtL31TzXaByVsKxseiCRMCvmYN9SEA72UHsjJLa74UAuaopboMFtQfTj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WzAfKHq2v8wVPvEQXP5RsW8C18S99hRcWuDJkcWd2oMLDqjEuZfcJ2Jzw1R94j8ZYQLjqWUZd31WfCj1zFuCTRw",
  "key1": "4ph6KuJtDfP7dxhg23mNVs9CHr3aXM7enAD3dCcwqzqPTXmdqoj1QH6oWXtEJh6gHmvRhfAvz7Yr239rxh4j7R5M",
  "key2": "4AP9pn8iFMgoZHoUzLuniqzhmrFZMehosH8TdVYULAHSQRMTQpV59gdjchkj3gnpUtazgR4ebJgYZqNLwsLTvtfQ",
  "key3": "3j4Zc5RJJeVmH9SjCT1wUGLXDWX8qD18HXKvzEZRhq7uzxG7LAoJt2VgrqciuetWnP2Vbzcqwf4hjUwiCGcNdJW3",
  "key4": "3DSgYgF5sGAzus1XehqWRvgABAZVZj6ARnwwTwQ1CKY3askLRQtzSMsC8wgHW8PzgzSwSFLxJ9iDcVNcnGtuHN8d",
  "key5": "62HgkGqfi2FZRDFfxWRPESPE6DEfeSTCra6UsPU9hvgPnhfmbKpRvgnzPnjW7UzxGEhjH32MUGNt5DMdwH9u7rBa",
  "key6": "28aLPQVuQQKpM1Q1KXyfdWCeJzDGQPDavsDgYPLYBB89F7p793zHzm4XyRT18Mu4hmSEXkCcJCC4NNZHx9MeMFPY",
  "key7": "3f9U2E7VH2JU9cMayzN7CQ56yFV8NLkVYp2DrLvt8FPpMgbgTjwnmp3YxGqJCMMAw1tw9tHmaj1aZ6JFJCdc267N",
  "key8": "2nLwA6YwX92RpM4wiPdQjxWAW5LmWDnpMHGv99oBmLLmDfeUrSAa7Q1aDagupXDWbQLYN8NWjeLyufr8gcjVgP3F",
  "key9": "4bA1Ud6FVKmzsRNxSGjdgP5p9zSMp79Ba5NWwLHr489aUELCMsywYXtqv6vEKrjW9qfaUviwke1MJKHYok6FN46K",
  "key10": "5kv38fWHQher7vamR1XdF4KDENj9CLnYZuCPxPVXfgntTRp2S8Q32pDsHrfWU2SMD27qUmT3mEV3MuTiJMkRL12g",
  "key11": "2n7qTRC94SRUtxtPUgvt1vADjZUymif4ewHqWTVQpFUaoiZs3qU4k2dHQ9K74q73P4F3aaqb9b3HMjRemQ9CS2z2",
  "key12": "65AyNAYBPxv8XZ6G5GraL799tQtwKE1fYbPiLBtrYGb1gKfPpm2Fiwm78SyjA1DbGwFyGHyH88GGXJ2yGWXAVtHw",
  "key13": "2ixadmtcXv5guj5hrynHttrd4SqYYuyS5kgo9YVAUpMkDyHRmk3KXsihDeReUwt5ok61CXdP9u3fXeYNNAddu4JF",
  "key14": "3a1byuQY5onwf9tBr8bTycSYMUug9gUZrU1eMeDkWTYPUBxzRmA3jJk7nVPBRuT6BSwwj59xhpKhMZKK92iY3hN7",
  "key15": "2b6VjSrHwXyAqHwAWGnWxjtvQVYNXzJcaD6M3nEgSyagJES2tFEDbuf555wK38ecKHA9hF78oRfSv4A6xQeY1qGv",
  "key16": "3JPVGqkYZqBZRre5cNatySVDtJYxLifam1W6r69hgYjwHS2LvqbrMEbNMSLULUXVsD4n218KDn97TGdq4eYu47gt",
  "key17": "Nro2rnopmQXW5k9s76C8mUn4cvMME18BZkUXpQwqDVH6kUY7rs2ETqZpRVYA2YiUrPzGNEkFTzeKXaYrUXwZU9Z",
  "key18": "2KttabBj4NrPHEvhZrJH8GobeiZCxG8zb133sWgVnebk6RoDwDnFssoB6huVmLUadHfAz3sCXLF9wQ1fKzuPwX22",
  "key19": "uXht65hANYebLxmudreZDTX6hLEEca4MFCKHqbkLGJj36YKnZw3FELFFc2iKzm7x8KNB3NrqQ8MeqtwQNd3tGwG",
  "key20": "Me5ByUX1wxTJPAwutmioK669PNNCDY7ZAJprpqxAjbdk3BrF852yXdpPwL4e4B7WyU1grUH15muBPJNZA6XgqZZ",
  "key21": "3VJnmE7WuBPkdYPPpZ6fn7ZdLVAPnukaSw8k5kHyqgSpRGDeHLhpEsPPGHLXZHGJ2SsA3zbZLyYkPM3qcFXynSx3",
  "key22": "3dzFcPZ2d8pevYX4D9ggjob7bzq5UyQP1u9q374DqstsGKqfm1c4amMXXqtyHpe1umsYskgQ9Eiqo5tACZiLVT5H",
  "key23": "558gvQnkqL8viym8RPnopmKHmDRuFtFEYVieLWDBXHq5UnMcxPZLnhdLMzoY1GK4hSCmdaZAXLk7wddo15SGd95J",
  "key24": "3BVRE2BjWA5XfGUr3aYmu8z3qQ4ZcyB4YSDdMfaGnYsRnVQMQU7UbqFa9yiywCJ5qhcuf6Gmi5Bmf3fobVZSimju",
  "key25": "5roKUNMh52cmNoqkiwKYpjfnZFzhn6r9gVJUJhUy1gXfqMim1QJHSVDuuAaqWQFa46f1mMg2xJMjuKKXiWca19bb",
  "key26": "4M95JPT2ay8Z5b9NZvdaHkku3PjTcMex4XpZbftPXojpZe2bjnWAydw8GrSBNQbwvXEb5kTn3UJrZqnTYWr9oopD",
  "key27": "3uwc7XyQUhdKW2Djso1ufcFyw7hnqfrLVZ8oaJaXGfZTDgrjxvfGcyv2EHAKXVdbT3zsYsnt22TnEtuH9CDJvcYQ",
  "key28": "XJrJyNqihwemKar4p2speQumY4o5fRusWPoPTjPfrjS13D8P8jACcXLcJ26Nhg7cUV4nHPjLzyXEroA9ynNKDx7",
  "key29": "EesUzjNYpMAkgd9DEXnp6Yaj8YVkKin6QFHSJEfd8PX3TscjH9QDQETyFVWBBC4UApavJXriKTUhRqunfqwvTuJ",
  "key30": "4gDKcgSTsqkAV7VW5sVKYGBZ6J6v5nnm4K7Kj1QudCzYCxiMDj4BS6pVFCBCGT8466qv4CzLCpf7fWBuH3tLFhCR",
  "key31": "5xset6BwqNmyGMgxey5ipCua4P7RhnjzYR1UexkJQvcijw6yzALYVrbjx3kSMrrzwMb9Cz7m5Z17G29zAiYRV4nG",
  "key32": "4375FobdX7B6wkByHJ5EiNdQqvmSE7oc5BiEoKnKto9sm5RoYhbQaKBJcYDdGkXb7fQLd3chjZEjAWbueP6GVhW2",
  "key33": "4k1NvcmynfUsTH1QK2WZms1vsSWwSdR6KXVSZrKhn5E2hW1dinh8kFmoYwYcEhCEd5ucXDMsQighJUrymEwb6CAu",
  "key34": "47343vsZPJtrFt1VXvcWenj999Vzh8v1bk4XUQTZv3uERMvpk5BBfcDLEEgPCYdKoYSqn1b88FdR83BWWAx6YxQw",
  "key35": "62Sce4esoGNE7VbFfEgM6atJsbQbNBkDCg7VVHJpRSnPk76QMiCLTTNzesH7z6BGz2hazruN2sDGXud11PAoZazV",
  "key36": "2wXFdHrJxXpsLAvHPP2hibhsqN7zjQFGQd2wDd74M35onfrrvddd2BqqVeHgw2m4ygmNZ39CajBoJEYXGE4jNznF",
  "key37": "xRyrnd5Wn8MNPmRRmwYMHnVJqeibrQpEYxufeDgmtTxaeutSuNGnZcNDDPmsNQKD1P8zox7KgLxQrbn2x3Q2DcA",
  "key38": "5RLi64Bja8Q7iH5KZw1Ma4xcxipNPxcFt29g4xDZdHdofQrCTF7ozCXs9SC2m8QyY5dMwkSLDwGkfgFFkiTascjn",
  "key39": "5sLF1r9jHT94fbMPvL6jVPGaFDTZBagkaRKJvx2M6AqDvFwCZTarqZDpLUsQWm3Q4uMj6xhEBE7hTAyVZ4oMT6ZN",
  "key40": "PbXe1XQqaWRRpWcqofb6ASReSjM6Btt2xKbti5NuJkERt9SmPbhTpU8RenBtkSneMFu1NTvvWzCL5yJ5wvynk69",
  "key41": "PDLAs3AcEK83Ert6SAsx8QvSLGhQzpu8RH1oqzK7ZU2j1kkQBoKZrSdbEXAxN9ZPA7NGat8ZBfunWnaETUQyqtW",
  "key42": "5v2yRu6vQkkb76ywySUTH4GD1Sx1QMYfeorQ6Be3HeBmSCPKf7Xz5VsYDeZDNYqUVvRCe4GyMQ3XRgq8StLS2g1W",
  "key43": "4DP2vJBzPcx5eQfiieT9zfmsjSeXrNW3Yo9rxjWzk9AzFYct2K5CGuevkzP9WmRGKpztZR2gxfZFngkpZfhWeVuy",
  "key44": "21Qsv2jjCTjVPiFNMkthkfq8VwwdeRiF9TwRK5Wm4KyRXKGAZa14tADcaKm3FQW7mdQVGiDMxeQjt4RQRM27bg3s",
  "key45": "KT5MABybEZLgcq7yn1nCcetmsiDeENmZi9FE6cmaszYDEB1MxgajBcByXbf12ozyFEPN2VvR2G6URuNduh7ZDRr",
  "key46": "5cK9EspbPsHyt5yrmsTcvDnQejrB21SkLToTmwhEEFRbGu1TPGyhXnxLNst1WLmbX7MhNRtcZXCsgtFpkxc363op",
  "key47": "5DRfrtwJsYayK8XPmM7GPeP8BHdDvy7tPXxT1CUPU2LfNXXzcHEc3Y4jJUk3bqXLNkzraNwPVPmXrDHxjMnKhZQy"
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
