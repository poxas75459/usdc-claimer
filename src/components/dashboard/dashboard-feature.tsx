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
    "63qWEw8QqYehAx6AtUEmnD6DeKmYVqhAG4QZxd7HKh8L3EcLsQ2EQTszDWoqgvJvAMW4haU8iuvnchpV53tNYyEQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fw7Somi85gEHEe3WGr4RhpNxhhXfdFMjmofTpS34mP5Y3fdtoj3fR8HV5kRS2hySfKkMUh84EJHsRBnf5m4RsJV",
  "key1": "62CJSjLF5wve9CcpW1f1tDjT3CPWdwosZ34wdkULtSUCdSrXdJYu5UJWp7Cd12T6Hq4oAYZFGqiHbNGsRh4EFBCd",
  "key2": "4djcKJL6bRyqwRjvAC5nbZkaVD8eqczu5KfEQc1bzfiVsQhRuy2suMfF8Jxhh8BxYqepGQsmJ2Sem55HV6Vjg6TX",
  "key3": "3oDzLwtd1xM9MJydktBbfBwMSTUi1vBcgAxYW4cJZryDxuBnfZDCVojCYgrhrPoqnu49ToMCZyCRSLXb4etJbpy2",
  "key4": "5p3S1kPA6NxozRTeweGg2HfYtEpEaXA6AZFGcm4f35kt8Z19Z4rKCj1PLD6PcgfYLi8Yw7XiS3QJQpoFtiMCDUrZ",
  "key5": "3vp92AsVYmVykDcCEmZxFZjWWPShGJJ8CWDE3wj4c9aD5KuEysch5aZ8vLkkUX4KCBbzotAcDLCxBL7KskGDLYHQ",
  "key6": "5e7U8swUVtnFu1zJV2KtxHe2NTywkJ9wi6CSpw2DqrbFTgM6eJxxiuPez4M4vX5ibemkjfhfnpEqBazqR18auLEy",
  "key7": "57BcsUMznKNBb6ocGYJjm3YjHFyWJLGMaz8jkHjQfAzwxG1KWJSKAZm6CKnrRn8CufqgUdq7b4PTuAaG9Bxfe3aU",
  "key8": "2LqQV51SggTHVoybGA7Fxy8xvtN2954XTnkvY4aqxHR5Bs6CPkzLXnyifABMXQN68hEbZTQe32DbS3LgTKyrQ3YW",
  "key9": "4rukdXJwdfVjGhXDcFDr7KR44W41fy9Ybw73tQN6cWc2yh4WQeARyCQxsysn7kjtbGoaC33DjAWbHJLeRunT4Muo",
  "key10": "4puBUGgdRvdaNw8Dx5koDeRLxNFzYxmq3uL92GvVnrjHmZhmfHMzTUN4r6dHv3tyavBvkiWsoqk3TdAUxLMfx4oQ",
  "key11": "PEM4qUdZApFxRRfPtK7vnscrRqLWshQfYkeWStGhwRFvZYy9sneG7L5XKJW9ry76FsKapDbhunzttgyazZkauy2",
  "key12": "2phbMpoxWtT72DAZhkpax1Df78oJKd6kWpT3Ss9ouSuSj6uuFcJ3p4whpNiDyMwAeEJWZt6KS58qfeD5CU5HTnEL",
  "key13": "2gxZEaYh8vhjEjuMoj2iSEyg1Sc7FxrLLr3r11Pf6unN4YpgyRsFU762g7mnW64ahgSD2VQUfqDskbpDhWkULRtm",
  "key14": "5uDDo4yZVJYy5gL34fWuewrVZXMod9g8PMRbuXQDn9v1nzcdF3ZF3AtT411SVEiUHp5rbf8aL4ggGqaQqcwVzryA",
  "key15": "eC8mwiy1tR5ksuwVxmamTNuRYjG86cZ1XPAsAYMmwDTuGrEwBXDGSbdwZpCb3VG5t16cWoV4LFpmK1goqFQsnrM",
  "key16": "3MRhuxptQu1hMpUPz23P5XKRwdeAz23SjDnPLuK25XRZLNwc4PD6DgJAa1cQp6okqeH7g9LeDgyfpi4or2pqXqeE",
  "key17": "5Z52w32XfFYxPvaoAsXH3WrbpwENaciAweVKqatraN1ugAedC39taE9pWT6SqZqhdLN74mMqACyT4as2djE18PDq",
  "key18": "7LLNoRDiLQNATMyUNPaUqbqdMZJrpm7WuPTrnXBCMm8QtAPVC6p57ZjxG8t4B39wVToK8Atbsxb7PHNagCggqLX",
  "key19": "42BLg12eUShcPNvg94kaHMhdeif5wVA2tQin96PPAsPxahGmYP553Lw2Lda3Y4P4UEBQ3pVhbBEiqdeoLJrucU5p",
  "key20": "3QmY9xuYeaRY875Hk7YYN2PvJU6FYgcX2Ve98Rnr74MtQJN3hNdSqbxWhCNd5Mx2go2FUYzokWct5PhtokWeZ7yh",
  "key21": "qmtvi7mrHwrVJoXjSSwrm6EyXi9PwTZYqHeQxcRUukGzb67EUH9zR5L5pXAUUYzUV1jqid1XqXH8XMeNepFrF5Z",
  "key22": "2WbPEjr1askVSazhqBZYZBn67Hi3UFkxJjB6cH4u9kjvijPr4tPjC3KveoqGYiAENfdnQWfX8eNV7L12muHcTnmc",
  "key23": "5JAfoNcNtbdxVaAuEiLKAumc5sm1WierESWJgRZUtHjiPFe3ojKezEirXvWL8vBbr3HarymkkDEXwkUjxUMBfss8",
  "key24": "5resrhd2j19pm94sDmnKj34KrXV6zxxt6GU8ad92XGP1vQxuZX2abu2VGTAL7JY4atgVgqYiCav7CoaF7xA1o5aM",
  "key25": "q9qHkgRENr3BHRTx6vXTYXitTrarf7eXE3v4BEi8gWsasgEGToZ8ofh5ooQ7eKcSzyEGhE1qoo2eZ9bzvCyykF2",
  "key26": "DtSVb6vTVKyciULdjBEGJsHNMfCAghX2eUniYZQyaVd8UjDvmMBeJQ6WHpPZPetJBHmT1TwMPnYnNztrEv5afuh",
  "key27": "5JvHAn6enzk188WiLGzXmmhBvJHn26CxkizTntmWTZtAKrcd4uQbk6A8bpebEKoZMUUsfeZEpXPTZTSWHDMmok43",
  "key28": "3XHdoqLbWjoSiXj7tq5gkNV6aw4awpfBudwEsuU9b5yuFrYyULp1XvdBM2fCpF4rsfYpZdyuYFTsCd8RsWoKA7PN",
  "key29": "Yaxn47h5vfEesjZGFH4hq75XUQffw76cKUj46bts7Widz1AZJy6HhaSunD5kBconmDenyRMDpubaKxRSsHASFuN",
  "key30": "2P5Bp2W2fbg26qU7mc8fJ5xjAwQ9zshQheKrVF7XxbFRNXga8TqGZkowKGRUtPyUXYogJCJVDupEdiGZvsyKrBpV",
  "key31": "5nBgXbdBR6Ck1arkFR7re7nio8LvJkod8Rhzw3MebJ9NVeVRim2EL5FkhBQYhxFEna7ziDcQenRP5vo4EX4te6jg",
  "key32": "MoGyztdsUoMShU8pcfDVe268SXeNhTGoJa2paaPCm7VNVb4116HUZiYN1VSDXwGcNd4EFXFYc1ro62wVvbeR2Bv",
  "key33": "2r2ec7sQqC9GhqNyCLRuXtw5jNEY9opXYHHYzvemP9WLppwrrpQjeLxsrV69gp5M3dPt5j5YSj5C1wMVsAZbJCXV",
  "key34": "FtRX2aGyLnafrFArMwzWTZP2LHVYH9ndyUQV6H15FYoTW5kVHApXJy9523MBfERumpjTgyXmthG7rxJyghg4HeT",
  "key35": "3vvexczcRqrtvfJsawEy2gFcnGdPeVLH4W6Zjy3hPbDCrLQi7Q21qXbS6P6Zdh3DRoKo1FKDbAu7kh8tzFKJWRiA",
  "key36": "4kznC4ZUaVBmHHjpGi5QRQbyqavcpRARkU39tXqndyWmU4ZEkvjHdTr81BWW4JiisnaMitKLyHrvJ74dy5f8ik6v",
  "key37": "2ivorJigXJweKPKYVcSgPTg9B5ik3zTuaxoPciWZstdxxHw3d1mwj8YVMuwRQv7YPuJ7uaRpqCetcv9GMxz2dmLT",
  "key38": "5XWVNg9HGJxc7W4gH3waQAwM1vWBYWFeNY8dpE4GTb6PDrvifYLr9zPzft4UScCA765xLbMNJTiwiDU7ocT9vnG7",
  "key39": "3N3C1zTYbJ9fgYYaqYznH2uoABsiXoog2Apdbkp1PphcLTxA16RtwtUY7Qv8KqVhoTPkMaVNWe2MDso69t2hYgdQ",
  "key40": "e5NRyLvqQF9W4tvk3wMJ3sZKA27RSnXmRTLodH6UfmNbLsHrseoWHzDBAenWZ7m455Y88Mx7vX8XxMbkGVe83Yg",
  "key41": "44StNHrpGdFeud2SGJwJigPWSzD7fKsGEqDVGDETNpz2hb1yGR8R9ojVH6QV3ipdnQwnyxkPtgadTzSWCG7q3NqJ",
  "key42": "9KUL6G6JLMAFm4mnGeWoMh2T7xf8SiyWdfhbEuMQ8BQPSNpoeucxPjjukkddhvPEDDdbpc28gLLTHNCx9WXonAA",
  "key43": "2Z5BTDLffc8w7QuVomJAzqKgjsYVsXc1nWKCQzNowZDmXNCuey51qg3pLkxbAY4rpu5jycj3Duubrpqb2c8tuqZW",
  "key44": "fwzSeRSFbnmTK9qwfCVCQXyGJb1PbH8uvk9FKUiNuzS1V1XVYpoYGpuV5XEN9LY5Yzf81crKgnmksD98gUqTmbE",
  "key45": "4dM7ZzbjUmvn8vApttxXbuz6YBKsNMrPAcWz14ecsznu7aSumY2mH8FGKkEzpHhMwb6yH7BNZgaY7TPRNhH7kcwC"
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
